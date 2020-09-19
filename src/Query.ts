import { Evaluate } from "./Evaluator";
import { Parse } from "./Parser";
import { Database } from "./Schema";

export type Query<SQL, DB extends Database<any>> = Evaluate<DB, Parse<SQL>>;
