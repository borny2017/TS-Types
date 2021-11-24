type IfEquals2<X, Y, A=X, B=never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B;

type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals2<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
  }[keyof T];

interface I1 {
    readonly n: number
    s: string
}

type I2 = Pick<I1, WritableKeys<I1>>; 
// equivalent to { s: string; }
