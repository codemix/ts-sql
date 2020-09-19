export type Table<T> = ReadonlyArray<T>;
export type Database<Schema> = {
  [TableName in keyof Schema]: Table<Schema[TableName]>;
};
