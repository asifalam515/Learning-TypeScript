type Tuser = {
  id: number;
  name: { firstName: string; lastName: string };
  gender: "Male" | "Female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};
const user1: Tuser = {
  id: 1231,
  name: {
    firstName: "asif",
    lastName: "alam",
  },
  gender: "Male",
  contactNo: "01234123",
  address: {
    division: "Kushtia",
    city: "kumarkhali",
  },
};
const isAdmin: boolean = true;
// type alias for
type TAdd = (num1: number, num2: number) => number;
const add: TAdd = (num1, num2) => {
  return num1 + num2;
};
