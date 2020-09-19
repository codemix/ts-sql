type _<T> = T;
export type Merge<T> = _<{ [k in keyof T]: T[k] }>;
