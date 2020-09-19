import { BinaryOperator, BinaryExpression, BooleanLiteral, Identifier, LogicalOperator, LogicalExpression, NullLiteral, NumericLiteral, SelectStatement, StringLiteral, Expression, FieldSpecifier, UpdateStatement, AssignmentExpression, InsertStatement, DeleteStatement, MemberExpression, TableSpecifier, InnerJoinSpecifier, JoinSpecifier } from "./AST";
import { IntegerStrings, Merge, Trim } from "./Utils";

export type Parse<T> = 
  ParseStatement<T> extends [infer Statement, infer Rest] ?
    Trim<Rest> extends ';' ? Statement :
    Trim<Rest> extends '' ? Statement : never :
    never;

type ParseStatement<T> = 
  ParseSelectStatement<T> | ParseInsertStatement<T> | ParseUpdateStatement<T> | ParseDeleteStatement<T>;

type ParseSelectStatement<T> =
  ParseSelectClause<T> extends Partial<SelectStatement<infer Fields, infer From, infer Joins, infer Where, infer Offset, infer Limit>>
  ? [SelectStatement<Fields, From, Joins, Where, Offset, Limit>, '']
  : never


type ParseTableSpecifier<T> =
  T extends `${infer Source} AS ${infer Alias}` ? TableSpecifier<Identifier<Source>, Identifier<Alias>> :
  T extends `${infer Source} ${infer Alias}` ? TableSpecifier<Identifier<Source>, Identifier<Alias>> :
  T extends string ? TableSpecifier<Identifier<Trim<T>>> :
  never;

type ParseSelectClause<T>
  = T extends `SELECT ${infer FieldNames} FROM ${infer R0}` ?
    Merge<{fields: ParseFieldSpecifierList<FieldNames>} & ParseFromClause<Trim<R0>>>
  : never;

type ParseFromClause<T> = 
  Tokenize<T> extends [infer Source, infer R0] ?
    Tokenize<R0> extends ['AS', infer R1]
      ? Tokenize<R1> extends [infer Alias, infer R2]
        ? {from: TableSpecifier<Identifier<Source & string>, Identifier<Alias & string>>} & ParseJoinClause<R2>
        : never
      : {from: TableSpecifier<Identifier<Source & string>>} & ParseJoinClause<R0>
  : never;

type ParseJoinClause<T> = 
  Trim<T> extends `INNER JOIN ${infer TableName} ON ${infer R0}`
    ? ParseExpression<R0> extends [infer Exp, infer R1]
      ? Exp extends Expression
        ? {joins: [InnerJoinSpecifier<ParseTableSpecifier<TableName>, Exp>]} & ParseWhereClause<Trim<R1>>
        : never
      : never
    : ParseWhereClause<Trim<T>> & {joins: []}

type ParseWhereClause<T> =
  Trim<T> extends ''
    ? { where: BooleanLiteral<true> }
    : Trim<T> extends `WHERE ${infer Where}`
      ? ParseExpression<Where> extends [infer Exp, infer R0]
        ? Exp extends Expression
          ? {where: Merge<Exp>} & ParseLimitClause<R0>
          : never
        : never
      : {where: BooleanLiteral<true>} & ParseLimitClause<Trim<T>>

type ParseLimitClause<T> =
  Trim<T> extends `LIMIT ${infer R0}`
    ? Tokenize<R0> extends [infer Limit, infer R1]
      ? Limit extends keyof IntegerStrings
        ? {limit: IntegerStrings[Limit]} & ParseOffsetClause<R1>
        : never
      : never
    : {limit: -1} & ParseOffsetClause<T>;
  
type ParseOffsetClause<T> =
  Trim<T> extends `OFFSET ${infer R0}`
    ? Tokenize<R0> extends [infer Offset, infer R1]
      ? Offset extends keyof IntegerStrings
        ? {offset: IntegerStrings[Offset]} & ParseStatementTerminator<R1>
        : never
      : never
    : {offset: 0} & ParseStatementTerminator<T>;


type ParseStatementTerminator<T> =
  Trim<T> extends ''
    ? {}
    : Trim<T> extends ';'
      ? {}
      : never;

type ParseInsertStatement<T> = 
  T extends `INSERT INTO ${infer TableName} SET ${infer Fields}` ?
  [InsertStatement<TableName, ParseAssignmentExpressionList<Fields>>, '']
  : never;


type ParseUpdateStatement<T> = 
  T extends `UPDATE ${infer TableName} SET ${infer Fields} WHERE ${infer Where}` ?
    ParseExpression<Where> extends [infer Exp, string] ?
      Exp extends Expression ?
        [UpdateStatement<TableName, ParseAssignmentExpressionList<Fields>, Exp>, ''] :
        never :
      never :
  T extends `UPDATE ${infer TableName} SET ${infer Fields}` ?
  [UpdateStatement<TableName, ParseAssignmentExpressionList<Fields>, BooleanLiteral<true>>, '']
  : never;

type ParseDeleteStatement<T> = 
  T extends `DELETE FROM ${infer TableName} WHERE ${infer Where}` ?
    ParseExpression<Where> extends [infer Exp, string] ?
      Exp extends Expression ?
        [DeleteStatement<TableName, Exp>, ''] :
        never :
      never :
  T extends `DELETE FROM ${infer TableName}` ?
  [DeleteStatement<TableName, BooleanLiteral<true>>, '']
  : never;

type ParseIdentifier<T> =
  T extends '' ? never :
  Tokenize<T> extends [infer Head, infer Tail] ? 
    Head extends '' ? never :
    Head extends 'null' ? [NullLiteral, Tail] : 
    Head extends 'true' ? [BooleanLiteral<true>, Tail] : 
    Head extends 'false' ? [BooleanLiteral<false>, Tail] : 
    Head extends keyof IntegerStrings ? [NumericLiteral<IntegerStrings[Head] & number>, Tail] :
    [Identifier<Head & string>, Tail] :
    [Identifier<T & string>, ''];

type ParseMemberExpression<T> =
  Tokenize<T> extends [`${infer O}.${infer P}`, infer Tail] ?
    [MemberExpression<O, P>, Tail]
    : ParseIdentifier<T>;

type ParseStringLiteral<T> =
  T extends `"${infer Value}"${infer Rest}` ? [StringLiteral<Value>, Rest] : 
  T extends `'${infer Value}'${infer Rest}` ? [StringLiteral<Value>, Rest] : 
  ParseMemberExpression<T>;


type ParseCallExpression<T> = 
  Trim<T> extends '' ? never :
  ParseStringLiteral<Trim<T>> | ParseParenthesizedExpression<T>;


type ParseBinaryExpression<T> =
  ParseCallExpression<T> extends [infer Left, infer R1] ?
    Left extends Expression ?
      Tokenize<R1> extends [infer Op, infer R2] ?
        Op extends BinaryOperator ? 
          ParseCallExpression<R2> extends [infer Right, infer R3] ?
            Right extends Expression ?
              [BinaryExpression<Left, Op, Right>, R3] :
              never :
            never :
          [Left, R1] :
        [Left, R1] :
      never :
    never;


type ParseLogicalExpression<T> =
  ParseBinaryExpression<T> extends [infer Left, infer R1] ?
    Tokenize<R1> extends [infer Op, infer R2] ?
      Op extends LogicalOperator ? 
        ParseExpression<R2> extends [infer Right, infer R3] ?
          Left extends Expression ?
            Right extends Expression ?
              [LogicalExpression<Left, Op, Right>, R3] : 
              never :
            never :
          never :
        [Left, R1] :
      [Left, R1] :
    never;


type ParseExpression<T> =
  Trim<T> extends '' ? never :
  ParseLogicalExpression<Trim<T>> | ParseParenthesizedExpression<T>;

type ParseParenthesizedExpression<T> = T extends `(${infer Content})${infer Rest}` ? [ParseExpression<Content>, Rest] : never;

type ParseFieldSpecifierList<T> = 
  T extends `${infer Head},${infer Tail}` ? [ParseFieldSpecifier<Trim<Head>>, ...ParseFieldSpecifierList<Trim<Tail>>] : 
  T extends `${infer Head} AS ${infer Alias} ${infer Tail}` ? [FieldSpecifier<Trim<ParseMemberExpression<Head>[0]>, Trim<ParseIdentifier<Alias>[0]>>, Tail] :
  T extends `${infer Head} AS ${infer Alias}` ? [FieldSpecifier<Trim<ParseMemberExpression<Head>[0]>, Trim<ParseIdentifier<Alias>[0]>>] :
  T extends `${infer Head} ${infer Tail}` ? [ParseFieldSpecifier<Trim<Head>>, Tail] :
  [ParseFieldSpecifier<Trim<T>>];

type ParseFieldSpecifier<T> =
  T extends `${infer Field} AS ${infer Alias}` ? FieldSpecifier<ParseMemberExpression<Trim<Field>>[0], ParseIdentifier<Trim<Alias>>[0]> :
  ParseMemberExpression<T> extends [infer M, ''] ? 
    M extends MemberExpression<infer O, infer P> ? FieldSpecifier<M, Identifier<P>> : M extends Identifier ? FieldSpecifier<M, M> :
  T extends string ? FieldSpecifier<Identifier<T>, Identifier<T>> : never :
  never;


type ParseAssignmentExpressionList<T> = 
  T extends `${infer Head},${infer Tail}` ? [ParseAssignmentExpression<Trim<Head>>, ...ParseAssignmentExpressionList<Trim<Tail>>] : 
  T extends `${infer Head} = ${infer Value} ${infer Tail}` ? [AssignmentExpression<Identifier<Trim<Head>>, ParseExpression<Trim<Value>>[0] & Expression>, Tail] :
  T extends `${infer Head} = ${infer Value}` ? [AssignmentExpression<Identifier<Trim<Head>>, ParseExpression<Trim<Value>>[0] & Expression>] :
  T extends `${infer Head} ${infer Tail}` ? [ParseAssignmentExpression<Trim<Head>>, Tail] :
  [ParseAssignmentExpression<Trim<T>>];

type ParseAssignmentExpression<T> =
  T extends `${infer Key} = ${infer Value}` ? AssignmentExpression<Identifier<Key>, ParseExpression<Value>[0] & Expression> :
  never;



type Tokenize<T> =
  Trim<T> extends `${infer Head} ${infer Tail}` ? [Head, Tail] :
  Trim<T> extends `${infer Head},${infer Tail}` ? [Head, Tail] :
  Trim<T> extends `${infer Head}(${infer Tail}` ? [Head, Tail] :
  Trim<T> extends `${infer Head})${infer Tail}` ? [Head, Tail] :
  Trim<T> extends `${infer Head};${infer Tail}` ? [Head, Tail] :
  Trim<T> extends `${infer Head})` ? [Head, ')'] :
  Trim<T> extends `${infer Head};` ? [Head, ';'] :
  [Trim<T>, '']