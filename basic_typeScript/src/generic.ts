{
  // dynamically generalize:Generic
  type GenericArray<value> = Array<value>;
  const friends: GenericArray<string> = ["asif", "saib"];
  const numbers: GenericArray<number> = [123, 6, 76, 12, 67];
  const result: GenericArray<boolean> = [true, false, true, false];
}
