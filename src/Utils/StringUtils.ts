export type MatchStringLike<Left, Right> = 
  Right extends `%${infer Content}%` ? MatchString<Left, Content> :
  Right extends `%${infer Content}` ? MatchStringEnd<Left, Content> :
  Right extends `${infer Content}%` ? MatchStringStart<Left, Content> :
  false;


export type EatFirstChar<T> =  T extends `${infer _}${infer B}` ? B : '';

export type MatchStringStart<Candidate, Pattern extends string> =
  Candidate extends Pattern ? true :
  Candidate extends `${Pattern}${infer _}` ? true :
  false;

export type MatchStringEnd<Candidate, Pattern extends string> =
  Candidate extends Pattern ? true :
  Candidate extends `${infer _}${Pattern}` ? true :
  false;

export type MatchString<Candidate, Pattern extends string> =
  Candidate extends '' ? false :
  MatchStringStart<Candidate, Pattern> extends true ? true :
  MatchStringEnd<Candidate, Pattern> extends true ? true :
  MatchString<EatFirstChar<Candidate>, Pattern> extends true ? true :
  false;

export type Trim<T> = 
  T extends ` ${infer Rest}` ? Trim<Rest> : 
  T extends `\n${infer Rest}` ? Trim<Rest> :
  T;


type Indents = {
  0: '',
  1: '  ',
  2: '    ',
  3: '      ',
  4: '        ',
  5: '          ',
  6: '            ',
  7: '              ',
};

export type Indent<T, Level = 1> = 
  Level extends keyof Indents
    ? `${Indents[Level]}${T & string}`
    : `${Indents[7]}${T & string}`;

type I0 = Indent<'hello world', 3>

export type JoinStrings<T, Sep = ', '> = 
  T extends [infer Head, ...infer Tail]
    ? Tail extends readonly []
      ? Head
      : Tail extends readonly string[]
        ? Head extends ''
          ? JoinStrings<Tail, Sep>
          : JoinStrings<Tail, Sep> extends ''
            ? `${Head & string}`
            : `${Head & string}${Sep & string}${JoinStrings<Tail, Sep>}`
        : `${Head & string}`
      : T extends [infer Head]
        ? `${Head & string}`
        : '';

type J0 = JoinStrings<['a', 'b', 'ccc', 'dd']>;
type J1 = JoinStrings<[], '|'>;
type J2 = JoinStrings<['aaa'], '|'>;
type J3 = JoinStrings<['aaa', '', 'bb', ''], '|'>;


export type StringContains<Input extends string, Term extends string> = 
  Input extends Term ? true :
  Input extends `${Term}${infer _}` ? true :
  Input extends `${infer _0}${Term}${infer _1}` ? true :
  Input extends `${infer _}${Term}` ? true :
  false;
