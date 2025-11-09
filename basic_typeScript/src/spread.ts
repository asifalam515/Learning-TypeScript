{
  // spread operator
  const friends = ["Rahim", "karim"];
  const schoolFriends = ["pintu", "chintu", "bulbuli"];
  const collegeFriends = ["Mr smart", "mr very very smart"];
  friends.push(...schoolFriends);
  friends.push(...collegeFriends);

  const user = {
    name: "Mezba",
    phoneNo: "0123412",
  };
  const otherInfo = {
    hobby: "outing",
    color: "red",
  };
  const userInfo = { ...user, ...otherInfo };
  console.log(userInfo);

  // rest operator
  const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`sending invitation to ${friend}`);
    });
  };
  sendInvite("rakib", "sakib", "mustak", "najmul");
}
