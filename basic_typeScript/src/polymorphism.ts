{
  // polymorphism =>bohurupi
  class Person {
    getSleep() {
      console.log(`i am a normal person. I  sleep for 8 hours`);
    }
  }
  class Student extends Person {
    getSleep(): void {
      console.log(`i am a student . I sleep for 7 hours `);
    }
  }
  class NextLevelDev extends Person {
    getSleep(): void {
      console.log(`i am a next level developer . I sleep for 5 hours `);
    }
  }
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };
  const person1 = new Person();
  const najmul = new Student();
  const asif = new NextLevelDev();
  getSleepingHours(asif);

  class Shape {
    getArea() {
      return 0;
    }
  }
  class Circle extends Shape {
    readius: number;
    constructor(radius: number) {
      super();
      this.readius = radius;
    }
    // areaa = pie*r*r
    getArea(): number {
      return Math.PI * this.readius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    // areaa = height * width
    getArea(): number {
      return this.height * this.width;
    }
  }
  const getArea = (param: Shape) => {
    console.log(param.getArea());
  };
  const shape1 = new Shape();
  const shape2 = new Circle(2);
  const shape3 = new Rectangle(10, 20);
  getArea(shape3);
}
