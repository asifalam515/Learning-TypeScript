{
  // generic function
  const createArrayWithString = (value: string) => {
    return [value];
  };
  const createArrayWithNumber = (value: number) => [value];
  const createArrayWithBoolean = (value: boolean) => [value];
  const createArrayWithUserObj = (value: { id: number; name: string }) => {
    return [{ value }];
  };

  const arrString = createArrayWithString("hello bruder");
  const numberArray = createArrayWithNumber(22);
  const arrObj = createArrayWithUserObj({ id: 123, name: "asibul alam" });
  // ..........
}
