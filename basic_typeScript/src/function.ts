{
  // function
  // arrow and normal function
  const sum = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  function add(number1: number, number2: number): number {
    return number1 + number2;
  }
  // object =>funciton ->called method
  const poorUser = {
    name: "asibf",
    balance: 0,
    addBalance(value: number): number {
      return (this.balance += value);
    },
  };
  poorUser.addBalance(10000);
  // call back function
  const arr: number[] = [1, 2, 4, 6, 1, 56];
  const squaredArr = arr.map((num: number): number => num * num);
  console.log(arr);
}
