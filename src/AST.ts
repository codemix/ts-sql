export type Identifier<Name extends string = string> = {
  type: "Identifier";
  name: Name;
};

export type MemberExpression<
  Object extends string = string,
  Property extends string = string
> = {
  type: "MemberExpression";
  object: Object;
  property: Property;
};

export type NumericLiteral<Value extends number = number> = {
  type: "NumericLiteral";
  value: Value;
};
export type StringLiteral<Value extends string = string> = {
  type: "StringLiteral";
  value: Value;
};
export type BooleanLiteral<Value extends boolean = boolean> = {
  type: "BooleanLiteral";
  value: Value;
};

export type NullLiteral = { type: "NullLiteral"; value: null };

export type BinaryOperator = "=" | "!=" | "LIKE";
export type BinaryExpression<
  Left extends Expression = Expression,
  Operator extends BinaryOperator = BinaryOperator,
  Right extends Expression = Expression
> = {
  type: "BinaryExpression";
  left: Left;
  operator: Operator;
  right: Right;
};

export type LogicalOperator = "AND" | "OR" | "&&" | "||";
export type LogicalExpression<
  Left extends Expression = Expression,
  Operator extends LogicalOperator = LogicalOperator,
  Right extends Expression = Expression
> = {
  type: "LogicalExpression";
  left: Left;
  operator: Operator;
  right: Right;
};

export type FieldSpecifier<
  Source extends Identifier | MemberExpression = Identifier,
  Alias extends Identifier = Identifier
> = {
  type: "FieldSpecifier";
  source: Source;
  alias: Alias;
};

export type TableSpecifier<
  Source extends Identifier = Identifier,
  Alias extends Identifier = Source
> = {
  type: "TableSpecifier";
  source: Source;
  alias: Alias;
};

export type AssignmentExpression<
  Key extends Identifier = Identifier,
  Value extends Expression = Expression
> = {
  type: "AssignmentExpression";
  key: Key;
  value: Value;
};

export type Expression =
  | LogicalExpression<any, LogicalOperator, any>
  | BinaryExpression<any, BinaryOperator, any>
  | MemberExpression
  | Identifier
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | NullLiteral;

export type InnerJoinSpecifier<
  From extends TableSpecifier<any> = TableSpecifier<any>,
  Where extends Expression = Expression
> = {
  type: "InnerJoinSpecifier";
  from: From;
  where: Where;
};

export type JoinSpecifier = InnerJoinSpecifier;

export type SelectStatement<
  Fields extends FieldSpecifier<any>[] = FieldSpecifier<any>[],
  From extends TableSpecifier<any> = TableSpecifier<any>,
  Joins extends JoinSpecifier[] = JoinSpecifier[],
  Where extends Expression = Expression,
  Offset extends number = number,
  Limit extends number = number
> = {
  type: "SelectStatement";
  fields: Fields;
  from: From;
  joins: Joins | [];
  where: Where;
  offset: Offset;
  limit: Limit;
};

export type InsertStatement<
  TableName extends string = any,
  Values extends readonly AssignmentExpression<any, any>[] = any
> = {
  type: "InsertStatement";
  tableName: TableName;
  values: Values;
};

export type UpdateStatement<
  TableName extends string = string,
  Values extends AssignmentExpression[] = AssignmentExpression[],
  Where extends Expression = Expression
> = {
  type: "UpdateStatement";
  tableName: TableName;
  values: Values;
  where: Where;
};

export type DeleteStatement<
  TableName extends string = string,
  Where extends Expression = Expression
> = {
  type: "DeleteStatement";
  tableName: TableName;
  where: Where;
};

export type Statement =
  | SelectStatement
  | InsertStatement
  | UpdateStatement
  | DeleteStatement;
