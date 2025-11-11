{
  let anything: any;
  anything = 1231;
  const ans = (anything as number).toString();
  const kgToGmConverter = (
    input: number | string
  ): string | number | undefined => {
    if (typeof input === "number") {
      return input * 1000;
    } else if (typeof input === "string") {
      const [gm] = input.split(" ");
      return `the converted value is ${Number(gm) * 1000}`;
    }
  };
  const answer = kgToGmConverter("3 kg") as string;
  console.log(answer);
  type customError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as customError).message);
  }
}
