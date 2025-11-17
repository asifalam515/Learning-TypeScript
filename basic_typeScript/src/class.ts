// oop -> class -> object

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`${this.name} sounds ${this.sound}`);
  }
}
const dog = new Animal("German shepard", "dog", "ghaw ghaw");
dog.makeSound();
