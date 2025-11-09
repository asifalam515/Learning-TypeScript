//  ? ternamery operator :decision making
// ?? nullish coalescing operator
//  ?. optional chaining

const userAge: number = 21;

const ans = userAge >= 21 ? "ready to get married" : "Not yet";
console.log(ans);

// nullish coalescing operator
const userTheme = "Green Theme";
const selectedTheme = userTheme ?? "Light Theme";
const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are a guest";
console.log(resultWithTernary);

// optional chaining
const user2: {
  address: string;
  town: string;
  postalCode?: string;
} = {
  address: "kumarkhali",
  town: "bonani",
};
const postalCode = user2.address?.postalCode;
