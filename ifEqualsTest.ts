
type IfEquals<X, Y, A=X, B=never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B;

type GetReadonlyKeys<T> = {
  [K in keyof T]-?: IfEquals<Pick<T, K>, Readonly<Pick<T, K>>, K, never>
}[keyof T]


type EQ1 = IfEquals<
  { a: number } ,
  { a: number },
  "same", "different">; // "same"!

type EQ2 = IfEquals<
  { a: number } ,
  { a: string },
  "same", "different">; // "different"!

type EQ3 = IfEquals<
  { a: number } ,
  { b: number },
  "same", "different">; // "different"!

type EQ4 = IfEquals<
  { a: any } ,
  { a: number },
  "same", "different">; // "different"!

type EQ5 = IfEquals<
  { a: unknown } ,
  { a: number },
  "same", "different">; // "different"!

type EQ6 = IfEquals<
  { a: string } ,
  { a: string , b: string},
  "same", "different">; // "different"!
  
type EQ7 = IfEquals<
{ a: undefined } ,
{ a: any},
"same", "different">; // "different"!

type EQ8 = IfEquals<
{ readonly a: string } ,
{ a: string},
"same", "different">; // "different"!

type EQ9 = IfEquals<
{ a?: string } ,
{ a: string},
"same", "different">; // "different"!

type E10 = IfEquals<
{ a?: string } ,
{ a?: string},
"same", "different">; // "same"!
