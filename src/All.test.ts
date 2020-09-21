import { Parse } from "./Parser";
import { Print } from "./Printer";
import { Query } from "./Query";

// # Usage

// First we define the data that we're going to be querying against.
const simpsons = {
  people: [
    { id: 1, firstName: "Bart", lastName: "Simpson", isChild: true },
    { id: 2, firstName: "Lisa", lastName: "Simpson", isChild: true },
    { id: 3, firstName: "Maggie", lastName: "Simpson", isChild: true },
    { id: 4, firstName: "Marge", lastName: "Simpson", isChild: false },
    { id: 5, firstName: "Homer", lastName: "Simpson", isChild: false },
    { id: 6, firstName: "Montgomery", lastName: "Burns", isChild: false },
    { id: 7, firstName: "Whelan", lastName: "Smithers", isChild: false },
    { id: 8, firstName: "Nillhouse", lastName: "Van Houten", isChild: true },
    { id: 9, firstName: "Nelson", lastName: "Muntz", isChild: true },
    { id: 10, firstName: "Principal", lastName: "Skinner", isChild: false },
  ],
  places: [
    { name: "Springfield Elementary", ownerId: 10, isActive: true },
    { name: "Nuclear Power Plant", ownerId: 6, isActive: true },
    { name: "Evergreen Terrace", ownerId: 4, isActive: true },
    { name: "Monorail", ownerId: 8, isActive: false },
    { name: "Treehouse of Horror", ownerId: 1, isActive: true },
    { name: "Playground", ownerId: 9, isActive: true },
  ],
} as const;

// This is the initial version of our database.
export type DBv1 = typeof simpsons;

// Let's find the names of people with the last name "Simpson".
// We use the `Query` type to execute queries, it takes a SQL
// query as first type parameter, and a database as the second.
// Note that all SQL keywords are UPPERCASE.
export type EX1 = Query<
  "SELECT firstName AS name FROM people WHERE lastName = 'Simpson'",
  DBv1
>;

// Let's find the first and last names of all the children in the simpsons
export type EX2 = Query<
  "SELECT firstName, lastName FROM people WHERE isChild = true",
  DBv1
>;

// Let's find the adults whose names begin with M
export type EX3 = Query<
  "SELECT * FROM people WHERE isChild = false AND firstName LIKE 'M%'",
  DBv1
>;

// Let's correct the typo in Milhouse's name. Since all types are immutable in TypeScript our
// database is immutable too, so this query returns a new database.
export type DBv2 = Query<
  "UPDATE people SET firstName = 'Milhouse' WHERE id = 8",
  DBv1
>;

// Let's check that our update worked

export type EX4 = Query<"SELECT * FROM people WHERE id = 8", DBv2>;

// Let's add a new character, again this returns a new database.
export type DBv3 = Query<
  "INSERT INTO people SET id = 11, firstName = 'Troy', lastName = 'McClure', isChild = false",
  DBv2
>;

export type EX5 = Query<"SELECT * FROM people WHERE firstName = 'Troy'", DBv3>;

// Unfortunately, we need to delete Troy McClure
export type DBv4 = Query<
  "DELETE FROM people WHERE firstName = 'Troy' AND lastName = 'McClure'",
  DBv3
>;

export type EX6 = Query<
  "SELECT firstName FROM people WHERE isChild = false",
  DBv4
>;

// We can add Moe tho

export type DBv5 = Query<
  "INSERT INTO people SET id = 11, firstName = 'Moe', lastName = 'Szyslak', isChild = false",
  DBv4
>;

export type EX7 = Query<
  "SELECT id, firstName AS name FROM people WHERE isChild = false AND firstName LIKE 'M%'",
  DBv5
>;

// Let's add Moe's Tavern
export type DBv6 = Query<
  'INSERT INTO places SET name = "Moe\'s Tavern", ownerId = 11, isActive = true',
  DBv5
>;

// Joins! Let's get all the places along with the names of their owners.

export type EX9 = Query<
  "SELECT name, person.firstName, person.lastName FROM places INNER JOIN people AS person ON places.ownerId = person.id",
  DBv1
>;

// Bonus feature: Pretty printer. Turns AST nodes back into SQL fragments.
// I gave up on this because TS and VSCode both (sensibly) escape newlines in
// strings, so the output wasn't particularly pretty.

export type PrinterEX0 = Print<
  Parse<
    'SELECT name,r.name AS roleName FROM users AS u INNER JOIN roles r ON u.roleId = r.id WHERE name = "Bob" AND awesome = true LIMIT 2 OFFSET 3'
  >
>;
