{
  // type guard

  // in and type of
  const add = (
    num1: number | string,
    num2: number | string
  ): number | string | undefined => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };
  //   in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUserInfo = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`This ${user.name} and his role is : ${user.role}`);
    } else {
      console.log(`This ${user.name} and his role is : Normal User`);
    }
  };
  getUserInfo({ name: "Admin", role: "Admin" });
}
