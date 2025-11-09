// object destructuring
const user = {
  id: "123",
  name: {
    firstName: "Asif",
    middleName: "ud",
    lastName: "doula",
  },
  gender: "male",
  favouriteColor: "black",
};
const { favouriteColor, gender } = user;
console.log(favouriteColor, gender);
// array destructuring
const friends = ["rahim", "karim", "mahim"];
const [roleFrn, bestFriend, notingFrn] = friends;
console.log(bestFriend);
