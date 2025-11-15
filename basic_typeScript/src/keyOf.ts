{
  // key of operator =>type operator

  type RichPeoplesVehicle = {
    car: string; //key :value
    bike: string;
    cng: string;
  };
  type MyVehicle1 = "bike" | "car" | "cng";
  type MyVehicle2 = keyof RichPeoplesVehicle;
  const myV: MyVehicle1 = "car";
  type TUser = {
    id: number;
    name: string;
    address: {
      city: string;
    };
  };

  const user: TUser = {
    id: 222,
    name: "asif",
    address: {
      city: "ctg",
    },
  };
  const myId = user["id"];
  const myName = user["name"];
  const myAddress = user["address"];

  //   convert to function
  const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
    return obj[key];
  };
  const result1 = getPropertyFromObj(user, "id");

  const product = {
    brand: "hp",
  };
  const student = {
    id: 123,
    class: "four",
  };
  const result3 = getPropertyFromObj(student, "class");
}
