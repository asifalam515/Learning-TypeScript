{
  let anything: any;
  anything = 1231;
  const ans = (anything as number).toString();
  const kgToGmConverter = (input: number | string) => {
    if (typeof input === "number") {
      return input * 1000;
    } else if (typeof input === "string") {
      const [gm] = input.split(" ");
      return `the converted value is ${gm * 1000}`;
    }
  };
  const answer = kgToGmConverter("3 kg");
  console.log(answer);
}
