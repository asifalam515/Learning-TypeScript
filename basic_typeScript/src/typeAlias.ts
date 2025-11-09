const user1: {
  id: number;
  name: { firstName: string; lastName: string };
  gender: "Male" | "Female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
} = {
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
