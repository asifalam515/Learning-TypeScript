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

  const user = {
    id: 222,
    name: "asif",
    address: {
      city: "ctg",
    },
  };
  const myId = user["id"];
  const myName = user["name"];
  const myAddress = user["address"];
}
