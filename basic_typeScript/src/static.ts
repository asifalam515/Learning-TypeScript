{
  // static
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count += 1);
    }
    static decrement() {
      return (Counter.count -= 1);
    }
  }
  const instance1 = new Counter();
  const instance2 = new Counter();
  //   instance1.increment();
  //   instance1.increment();
  //   instance1.increment();
  //   console.log(instance1);
  //   console.log(instance2.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
}
