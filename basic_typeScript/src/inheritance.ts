class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numOfHour: number) {
    console.log(`${this.name} sleeps ${numOfHour} hours`);
  }
}
class Student extends Parent {
  retake: number;
  constructor(name: string, age: number, address: string, retake: number) {
    super(name, age, address);
    this.retake = retake;
  }
  failedCourse() {
    console.log(`${this.name} get retake on ${this.retake} number of course`);
  }
}
const student1 = new Student("asif", 25, "kushtia", 0);
student1.failedCourse();
// teacher class
class Teacher extends Parent {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
}
const teacher1 = new Teacher("najmul", 122, "dhaka", "lecturer");
teacher1.getSleep(1);
