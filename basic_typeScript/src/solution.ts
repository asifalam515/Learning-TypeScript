const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return undefined;
  }
};
// Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

// If the input is a string → return the number of characters.
// If the input is an array → return the number of elements.
// Requirements:
// You must write the correct type for the function parameter and the return type.
// You must use type checking to handle each case (typeof or Array.isArray).
const getLength = (value: string | string[]) => {
  let length = 0;
  for (let i = 0; i < value.length; i++) {
    length++;
  }
  return length;
};
console.log(getLength([10, 20, 30, 40]));
