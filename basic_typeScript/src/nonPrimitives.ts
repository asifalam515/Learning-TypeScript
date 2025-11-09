// array and Object
// ts tuple
let bazarList: string[] = ["eggs", "rice", "banana", "sugar", "milk"];
let mixedArray: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 5];
mixedArray.push("234");
mixedArray.push("apple");

let coordinates: [number, number] = [20, 30];
let couple: [string, string] = ["asif", "eva"];

let MezbaNameAndRoll: [string, number] = ["Mezba", 76];

// referance and object type
const user: {
  firstName: string;
  middleName?: string;
  lastName: string;
  organization: "Programming Hero";
} = {
  firstName: "asif",

  lastName: "doula",
  organization: "Programming Hero",
};
