{
  // contraint:strict kono rules deya
  type TStudent = { id: number; name: string };
  const addStudentToCourse = <T extends TStudent>(studentInfo: T) => {
    return {
      course: "Next Level Web Course",
      ...studentInfo,
    };
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
  const student3 = {
    id: 123,
    name: "sakib",
    hasWatch: true,
  };
  const result = addStudentToCourse(student3);
  console.log(result);
}
