/**
 * Arrow Functions
 *
 * syntax: some variable name = (parameters) => code
 *
 * "=>" is called FAT ARROW
 * -> is called thin ARROW
 *
 * 1. ARROW FUNCTIONS DON'T GET HOISTED
 */

const arrowFunction = () => {
  console.log("Hello world");
};
arrowFunction();

// if there is only one parameter, you can skip the parenthesis
// prettier-ignore
const noParenthesis = a => console.log(a);
noParenthesis("hi");

// if there is only one command, you can skip curly braces and return statement
const noCurlyBraces = (a, b) => a + b;
console.log("🚀 ~ noCurlyBraces:", noCurlyBraces(3, 4));

const withCurlyBraces = (a, b) => {
  console.log(a - b);
  return a - b;
};
withCurlyBraces(8, 9);

/**
 * 01 medium
 * Write a function that takes a string and reverses it using arrow functions.
 * Example: reverseString('hello') should return 'olleh'
 */

const reverseString = (string) => {
  let paper = "";

  for (let i = string.length - 1; i >= 0; i--) {
    paper += string[i];
  }
  console.log("🚀 ~ paper:", paper);
};

reverseString("hello");
reverseString("paper");
reverseString("abc");

const reverseStringOneliner = (string) => string.split("").reverse().join("");
console.log("🚀 ~ reverseStringOneliner:", reverseStringOneliner("abcd"));

/**
 * 02 medium
 * Write a function that takes an array of strings and returns an array containing
 * the lengths of those strings using arrow functions.
 * Example: getLengths(['hello', 'world']) should return [5, 5]
 */

const getLengths = (array) => {
  const lengths = [];

  for (let i = 0; i < array.length; i++) {
    const length = array[i].length;

    lengths.push(length);
  }

  return lengths;
};

console.log(getLengths(["hello", "world"]));
console.log(getLengths(["hello", "world", "abc", "adjskhadfjfdhjlhkj"]));
