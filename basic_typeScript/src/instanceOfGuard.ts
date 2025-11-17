{
  //oop :instance of type guard/type narrowing

  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} sleeps for  ${numOfHours} hours `);
    }
  }
  class Student extends Person {
    constructor(name: string) {
      super(name);
    }
    doStudy(numOfHours: number) {
      console.log(`${this.name} doing study for ${numOfHours} hours `);
    }
  }
  class Teacher extends Person {
    constructor(name: string) {
      super(name);
    }
    takeClass(numOfHours: number) {
      console.log(`${this.name}give lecture for ${numOfHours} hours `);
    }
  }
  const getUserInfo = (user: Person) => {
    if (user instanceof Student) {
      user.doStudy(2);
    } else if (user instanceof Teacher) {
      user.takeClass(6);
    } else {
      user.getSleep(8);
    }
  };
  const student1 = new Student("Mr student");
  const teacher1 = new Teacher("Mr Ripon sir");
  getUserInfo(teacher1);
}
