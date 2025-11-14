// key of operator =>type operator

type RichPeoplesVehicle = {
  car: string; //key :value
  bike: string;
  cng: string;
};
type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;
const myV: MyVehicle1 = "car";
