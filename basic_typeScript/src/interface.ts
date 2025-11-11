{
  type TUser = {
    name: string;
    id: number;
    address: string;
    age: number;
  };

  type Role = {
    role: "admin" | "user";
  };
  type UserWithRole = TUser & Role;

  interface IUser {
    name: string;
    age: number;
  }
  interface IUserWithRole extends IUser {
    role: "admin" | "user";
  }
  const user3: IUserWithRole = {
    name: "asif",

    age: 24,
    role: "user",
  };

  //   function
  //   function type
  type TAdd = (num1: number, num2: number) => number;
  interface IAdd {
    (num1: number, num2: number): number;
  }
  const add: IAdd = (num1, num2) => {
    return num1 + num2;
  };

  //   array
  type Friends = string[];
  const friends: Friends = ["a", "b"];
  interface IFriends {
    [index: number]: string;
  }
}
