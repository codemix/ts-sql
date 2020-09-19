```
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄               ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌             ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌
 ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀              ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌
     ▐░▌     ▐░▌                       ▐░▌          ▐░▌       ▐░▌▐░▌
     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌
     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌
     ▐░▌      ▀▀▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌
     ▐░▌               ▐░▌                       ▐░▌▐░░░░░░░░░░░▌▐░▌
     ▐░▌      ▄▄▄▄▄▄▄▄▄█░▌              ▄▄▄▄▄▄▄▄▄█░▌ ▀▀▀▀▀▀█░█▀▀ ▐░█▄▄▄▄▄▄▄▄▄
     ▐░▌     ▐░░░░░░░░░░░▌             ▐░░░░░░░░░░░▌        ▐░▌  ▐░░░░░░░░░░░▌
      ▀       ▀▀▀▀▀▀▀▀▀▀▀               ▀▀▀▀▀▀▀▀▀▀▀          ▀    ▀▀▀▀▀▀▀▀▀▀▀
```

This is a SQL database implemented purely in TypeScript type annotations.
This means that it operates solely on types - you define a "database",
(just a type annotation) and then query it using some more type annotations.
It supports a subset of SQL, including SELECT, INSERT, UPDATE and DELETE statements.

This project lives at https://github.com/codemix/ts-sql

This was written by Charles Pick ( charles@codemix.com, https://twitter.com/c_pick ).

You can install ts-sql in your own project with `npm install @codemix/ts-sql` or
`yarn install @codemix/ts-sql` (TypeScript 4.1 is required).

(Tip: hover over the type aliases below to see the results of your queries)
