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

  const createArrayWithGeneric = <T>(value: T) => [value];

  const arrString = createArrayWithGeneric("string");
  const arrNumber = createArrayWithGeneric(234);
  const arrObject = createArrayWithGeneric({ id: 232, name: "asif" });

  // tuple with generic
  const createTupleWithGeneric = <X, Y>(value1: X, value2: Y) => {
    return [value1, value2];
  };
  const res1 = createTupleWithGeneric(1, 2);
  const res2 = createTupleWithGeneric("asi re vai achi", {
    name: "iphone",
    price: 1233,
  });

  // const addStudent to course
  const addStudentToCourse = <T>(studentInfo: T) => {
    return { course: "Next Level developement", ...studentInfo };
  };
  const student1 = {
    id: 1234,
    name: "asif",
    hasPen: true,
  };
  const student2 = {
    id: 1232,
    name: "Jhankar vai",
    hasCar: true,
    isMarried: true,
  };
  const result = addStudentToCourse(student1);
  const result2 = addStudentToCourse(student2);
  console.log(result2);
  // ..........
}
