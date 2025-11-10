const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB:ALL USER");
  }
};

// unknown: we will understand data type in run time
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(discountedPrice);
  }
};
discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);
