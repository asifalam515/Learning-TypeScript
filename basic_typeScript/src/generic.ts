{
  // dynamically generalize:Generic
  type GenericArray<T> = Array<T>;
  const friends: GenericArray<string> = ["asif", "saib"];
  const numbers: GenericArray<number> = [123, 6, 76, 12, 67];
  const result: GenericArray<boolean> = [true, false, true, false];
  type Coordinate<X, Y> = [X, Y];
  const coordinates: Coordinate<number, number> = [20, 30];

  const userList: GenericArray<{ name: string; age: number }> = [
    {
      name: "asif",
      age: 24,
    },
    {
      name: "rakib",
      age: 18,
    },
  ];
}
