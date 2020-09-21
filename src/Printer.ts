import { AssignmentExpression, BinaryExpression, BooleanLiteral, FieldSpecifier, Identifier, InnerJoinSpecifier, LogicalExpression, MemberExpression, NullLiteral, NumericLiteral, SelectStatement,  StringLiteral, TableSpecifier } from "./AST";
import { JoinStrings, StringContains } from "./Utils";

export type Print<T> =
  T extends Identifier<infer N> ? N :
  T extends MemberExpression<infer O, infer P> ? `${O}.${P}` :
  T extends NumericLiteral<infer V> ? `${V}` :
  T extends StringLiteral<infer V> ? QuoteString<V> :
  T extends BooleanLiteral<true> ? 'true' :
  T extends BooleanLiteral<false> ? 'false' :
  T extends NullLiteral ? 'null' :
  // @ts-ignore due to excessive depth
  T extends BinaryExpression<infer L, infer O, infer R> ? `${Print<L>} ${O} ${Print<R>}` :
  T extends LogicalExpression<infer L, infer O, infer R> ? `${Print<L>} ${O} ${Print<R>}` :
  T extends FieldSpecifier<infer S, Identifier<infer A>> ?
    S extends Identifier<A>
      ? `${A}`
      : `${Print<S>} AS ${A}` :
  T extends TableSpecifier<Identifier<infer S>, Identifier<infer A>> ?
    S extends A ? `${S}` : `${S} AS ${A}` :
  T extends InnerJoinSpecifier<TableSpecifier<infer S, infer A>, infer Where> ?
    JoinStrings<['INNER JOIN', Print<TableSpecifier<S, A>>, 'ON', Print<Where>], ' '> :
  T extends SelectStatement<
      infer Fields & any[],
      TableSpecifier<infer TableName, infer TableAlias>,
      infer Joins & any[],
      infer Where,
      infer Offset,
      infer Limit
    > ?
      JoinStrings<
        [
          'SELECT',
          Fields extends readonly any[] ? JoinStrings<PrintArray<Fields>, ', '> : '',
          'FROM',
          Print<TableSpecifier<TableName, TableAlias>>,
          JoinStrings<PrintArray<Joins>, ' '>,
          Where extends BooleanLiteral<true>
            ? ''
            : `WHERE ${Print<Where>}`,
          Limit extends -1 ? '' : `LIMIT ${Limit}`,
          Offset extends 0 ? '' : `OFFSET ${Offset}`
        ],
        ' '
      > :
  T extends AssignmentExpression<Identifier<infer Key>, infer Value> ?
      JoinStrings<[Key, '=', Print<Value>], ' '> :
  `[CANNOT PRINT THIS AST NODE`;

type PrintArray<T> = T extends any[] ? {[K in keyof T]: Print<T[K]>} : never;


type QuoteString<T extends string> = 
  StringContains<T, "'"> extends true ? `"${T}"` : `'${T}'`;


