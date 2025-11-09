{
  type UserRole = "admin" | "user" | "guest";
  const getDashboard = (role: UserRole) => {
    if (role === "admin") {
      return "admin dashboard";
    } else if (role === "user") {
      return "user dashboard";
    } else {
      return "guest dashboard";
    }
  };
  const ans = getDashboard("admin");
  console.log(ans);

  //intersection &
  type Employee = {
    id: string;
    name: string;
    phoneNo: string;
  };
  type Manager = {
    designation: string;
    teamSize: number;
  };
  type EmployeeManager = Employee & Manager;
  const ChowdhurySahed: EmployeeManager = {
    name: "chowdhury",
    id: "q234",
    phoneNo: "01223",
    designation: "manager",
    teamSize: 12,
  };
}
