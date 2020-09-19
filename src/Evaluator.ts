import {
  AssignmentExpression,
  BinaryExpression,
  BooleanLiteral,
  DeleteStatement,
  FieldSpecifier,
  Identifier,
  InnerJoinSpecifier,
  InsertStatement,
  JoinSpecifier,
  LogicalExpression,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  SelectStatement,
  Statement,
  StringLiteral,
  TableSpecifier,
  UpdateStatement,
} from "./AST";
import { Database } from "./Schema";
import { MatchStringLike, Merge } from "./Utils";

type EvaluateStatement<
  DB extends Database<any>,
  Node extends Statement
> = Node extends SelectStatement
  ? EvaluateSelectStatement<DB, Node>
  : Node extends InsertStatement
  ? EvaluateInsertStatement<DB, Node>
  : Node extends UpdateStatement
  ? EvaluateUpdateStatement<DB, Node>
  : Node extends DeleteStatement
  ? EvaluateDeleteStatement<DB, Node>
  : never;

type EvaluateInsertStatement<
  DB extends Database<any>,
  Node extends InsertStatement
> = Node extends InsertStatement<infer TableName, infer Assignments>
  ? {
      [K in keyof DB]: K extends TableName
        ? InsertRow<
            TableName extends keyof DB ? DB[TableName] : never,
            Assignments
          >
        : DB[K];
    }
  : never;

type InsertRow<
  Table extends readonly any[],
  Assignments extends readonly AssignmentExpression[]
> = [
  Merge<
    UnionToIntersection<
      AllReadonly<AssembleEntries<ApplyAssignments<Assignments>>>
    >
  >,
  ...Table
];

type AllReadonly<T> = { readonly [K in keyof T]: T[K] };

type EvaluateUpdateStatement<
  DB extends Database<any>,
  Node extends UpdateStatement
> = Node extends UpdateStatement<
  infer TableName,
  infer Assignments,
  infer Where
>
  ? {
      [K in keyof DB]: K extends TableName
        ? UpdateRows<
            TableName extends keyof DB ? DB[TableName] : never,
            Assignments,
            Where
          >
        : DB[K];
    }
  : never;

type UpdateRows<
  Table,
  Assignments extends readonly AssignmentExpression[],
  Where
> = {
  [Index in keyof Table]: EvaluateExpression<Table[Index], Where> extends true
    ? UpdateRow<Table[Index], Assignments>
    : Table[Index];
};

type UpdateRow<
  Row,
  Assignments extends readonly AssignmentExpression[]
> = MergeValues<Row, AssembleEntries<ApplyAssignments<Assignments>>>;

type MergeValues<T, U> = Merge<
  { [K in keyof T]: K extends keyof U ? U[K] : T[K] }
>;

type ApplyAssignments<Assignments extends readonly AssignmentExpression[]> = {
  [K in keyof Assignments]: Assignments[K] extends AssignmentExpression<
    Identifier<infer Key>,
    infer Value
  >
    ? [
        Key,
        NullLiteral extends Value ? null : Exclude<ExtractValue<Value>, null>
      ]
    : never;
};

type ExtractValue<T> = T extends NullLiteral
  ? null
  : T extends BooleanLiteral<infer Value>
  ? Value
  : T extends NumericLiteral<infer Value>
  ? Value
  : T extends StringLiteral<infer Value>
  ? Value
  : never;

type EvaluateDeleteStatement<
  DB extends Database<any>,
  Node extends DeleteStatement
> = Node extends DeleteStatement<infer TableName, infer Where>
  ? {
      [K in keyof DB]: K extends TableName
        ? DeleteRows<TableName extends keyof DB ? DB[TableName] : never, Where>
        : DB[K];
    }
  : never;

type DeleteRows<Table, Where> = FilterUndefined<
  {
    [Index in keyof Table]: EvaluateExpression<Table[Index], Where> extends true
      ? undefined
      : Table[Index];
  }
>;


export type EvaluateSelectStatement<
  DB extends Database<any>,
  Node extends SelectStatement
> = Node extends SelectStatement<
  infer Fields,
  infer From,
  infer Joins,
  infer Where,
  infer Offset,
  infer Limit
>
? From extends TableSpecifier<
    Identifier<infer Source>,
    Identifier<infer Alias>
  >
  ? Source extends keyof DB
    ? Fields extends [FieldSpecifier<Identifier<"*">, Identifier<"*">>]
      ? FilterWhere<CollectInputRows<DB, From, Joins>, Where>
      : AssembleRows<
          Fields,
          ExtractFields<
            FilterWhere<CollectInputRows<DB, From, Joins>, Where>,
            Fields,
            Merge<
              UnionToIntersection<
                AssembleEntries<[[Alias & string, DB[Source]]]>
              >
            >
          >
        >
    : never
  : never
: never;

type CollectInputRows<
  DB extends Database<any>,
  From,
  Joins
> = From extends TableSpecifier<
  Identifier<infer Source>,
  Identifier<infer Alias>
>
  ? Source extends keyof DB
    ? Joins extends JoinSpecifier[]
      ? CollectJoins<DB, DB[Source], Alias, Joins>
      : DB[Source]
    : never
  : never;

type CollectJoins<
  DB extends Database<any>,
  Table extends readonly any[],
  Alias extends string,
  Joins extends JoinSpecifier[]
> =
  {[K in keyof Table]: CollectRowJoins<DB, Table[K], Alias, Joins>};

type CollectRowJoins<DB extends Database<any>, Row, Alias extends string, Joins extends JoinSpecifier[]> =
  Merge<Row & {
    readonly [K in keyof Joins as ExtractJoinAlias<Joins[K]>]: 
      Joins[K] extends InnerJoinSpecifier<TableSpecifier<Identifier<infer JoinSource>, Identifier<infer JoinAlias>>, infer Where>
        ? JoinSource extends keyof DB
          ? FirstElementOrNull<
              ExtractFieldByName<
                FilterWhere<
                  CollectJoinedArrayForRow<
                    DB[JoinSource],
                    ExtractJoinAlias<Joins[K]>,
                    Row,
                    Alias
                  >,
                  Where
                >,
                JoinAlias
              >
            >
          : never
        : never
  }>



type CollectJoinedArrayForRow<JoinTable extends readonly any[], JoinAlias extends string, TableRow, TableAlias extends string> =
  {[P in keyof JoinTable]: 
    Merge<
      TableRow
      & {[JA in JoinAlias]: JoinTable[P]}
      & {[TA in TableAlias]: TableRow}
    >
  };

type ExtractFieldByName<Table, FieldName> = 
  {[K in keyof Table]: FieldName extends keyof Table[K] ? Table[K][FieldName] : never };

type FirstElementOrNull<Table> =
  Table extends readonly any[]
    ? Table['length'] extends 0
      ? null
      : Table[0]
    : null;

type ExtractJoinAlias<Join> = Join extends InnerJoinSpecifier<TableSpecifier<Identifier<any>, Identifier<infer Alias>>> ? Alias : never;

type FilterUndefined<T> = T extends Readonly<[infer Head, ...infer Tail]>
  ? Head extends undefined
    ? FilterUndefined<Tail>
    : [Head, ...FilterUndefined<Tail>]
  : [];

type FilterWhere<Table, Exp> = FilterUndefined<
  {
    [Index in keyof Table]: EvaluateExpression<Table[Index], Exp> extends true
      ? Table[Index]
      : undefined;
  }
>;

type ExtractFields<Table, Fields, Aliases> = {
  [Index in keyof Table]: {
    [K in keyof Fields]: Fields[K] extends FieldSpecifier<infer Source>
      ? ReadRowField<Table[Index], Source, Aliases>
      : never;
  };
};

type GetValueByKey<Row, Key, Aliases> = 
  Row extends null ? GetValueByKey<Exclude<Row, null>, Key, Aliases> :
  Key extends keyof Row
  ? Row[Key]
  : Key extends keyof Aliases
  ? Aliases[Key]
  : never;

type ReadRowField<Row, Field, Aliases> = Field extends MemberExpression<
  infer O,
  infer P
>
  ? ReadRowField<GetValueByKey<Row, O, Aliases>, Identifier<P>, Aliases>
  : Field extends Identifier<infer P>
  ? GetValueByKey<Row, P, Aliases>
  : never;

type AssembleRows<Fields, Data> = Fields extends FieldSpecifier<any>[]
  ? { [Index in keyof Data]: AssembleRow<Fields, Data[Index]> }
  : never;

type AssembleRow<Fields extends FieldSpecifier<any>[], Data> = Merge<
  UnionToIntersection<
    AssembleEntries<
      {
        [Index in keyof Fields]: [
          Fields[Index] extends FieldSpecifier<any, Identifier<infer Alias>>
            ? Alias
            : never,
          Index extends keyof Data ? Data[Index] : never
        ];
      }
    >
  >
>;

type EvaluateExpression<Row, Exp> =
  | EvaluateLogicalExpression<Row, Exp>
  | EvaluateBinaryExpression<Row, Exp>
  | EvaluateMemberExpression<Row, Exp>
  | EvaluateIdentifier<Row, Exp>
  | EvaluateNullLiteral<Row, Exp>
  | EvaluateBooleanLiteral<Row, Exp>
  | EvaluateNumericLiteral<Row, Exp>
  | EvaluateStringLiteral<Row, Exp>;

type EvaluateBinaryExpression<Row, Exp> = Exp extends BinaryExpression<
  infer Left,
  infer Op,
  infer Right
>
  ? Op extends "="
    ? EvaluateBinaryEquals<
        EvaluateExpression<Row, Left>,
        EvaluateExpression<Row, Right>
      >
    : Op extends "!="
    ? EvaluateBinaryNotEquals<
        EvaluateExpression<Row, Left>,
        EvaluateExpression<Row, Right>
      >
    : Op extends "LIKE"
    ? EvaluateBinaryLike<
        EvaluateExpression<Row, Left>,
        EvaluateExpression<Row, Right>
      >
    : never
  : never;

type EvaluateBinaryEquals<Left, Right> = Left extends Right
  ? Right extends Left
    ? true
    : false
  : false;

type EvaluateBinaryNotEquals<Left, Right> = EvaluateBinaryEquals<
  Left,
  Right
> extends true
  ? false
  : true;

type EvaluateBinaryLike<Left, Right> = MatchStringLike<Left, Right>;

type EvaluateLogicalExpression<Row, Exp> = Exp extends LogicalExpression<
  infer Left,
  infer Op,
  infer Right
>
  ? Op extends "AND"
    ? EvaluateLogicalAND<
        EvaluateExpression<Row, Left>,
        EvaluateExpression<Row, Right>
      >
    : Op extends "OR"
    ? EvaluateLogicalOR<
        EvaluateExpression<Row, Left>,
        EvaluateExpression<Row, Right>
      >
    : never
  : never;

type EvaluateLogicalAND<Left, Right> = Left extends true
  ? Right extends true
    ? true
    : false
  : false;

type EvaluateLogicalOR<Left, Right> = Left extends true
  ? true
  : Right extends true
  ? true
  : false;

type EvaluateMemberExpression<Row, Exp> = Exp extends MemberExpression<
  infer O,
  infer P
>
  ? O extends keyof Row
    ? EvaluateIdentifier<Row[O], Identifier<P>>
    : never
  : never;

type EvaluateIdentifier<Row, Exp> = Exp extends Identifier<infer Name>
  ? Name extends keyof Row
    ? Row[Name]
    : never
  : never;

type EvaluateNullLiteral<Row, Exp> = Exp extends NullLiteral ? null : never;

type EvaluateBooleanLiteral<Row, Exp> = Exp extends BooleanLiteral<infer Value>
  ? Value
  : never;

type EvaluateStringLiteral<Row, Exp> = Exp extends StringLiteral<infer Value>
  ? Value
  : never;

type EvaluateNumericLiteral<Row, Exp> = Exp extends NumericLiteral<infer Value>
  ? Value
  : never;

export type Evaluate<
  DB extends Database<any>,
  S extends Statement
> = EvaluateStatement<DB, S>;

type PairToObject<P extends readonly [PropertyKey, any]> = P extends any
  ? {
      [k in P[0]]: P[1];
    }
  : never;
type ToUnaryFunctionUnion<U> = U extends any ? (arg: U) => void : never;
type UnionToIntersection<U> = ToUnaryFunctionUnion<U> extends (
  arg: infer I
) => void
  ? I
  : never;

type AssembleEntries<
  Entries extends Iterable<readonly [PropertyKey, any]>
> = Entries extends Iterable<infer P>
  ? P extends readonly [PropertyKey, any]
    ? Merge<UnionToIntersection<PairToObject<P>>>
    : never
  : never;
