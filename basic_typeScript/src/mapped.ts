// mapped type
// map
const arrayOfNumber: number[] = [1, 2, 4, 2, 5, 7, 8];
const arrayOfString: string[] = ["1", "4", "7"];
const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) =>
  num.toString()
);
console.log(arrayOfStringUsingMap);

type AreaOfNumber = {
  height: number;
  width: number;
};
type height = AreaOfNumber["height"];
// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: boolean;
};
