/**
 * array method find
 *
 * syntax: array.find(cb)
 * purpose: finds the FIRST item in an array that matches the criteria
 *
 * returns: the found item
 */

// find the negative number
const numbers = [-10, 1, 3, 2, -1, 3, -2, -3];

const foundNumber = numbers.find((item) => item < 0);
console.log("🚀 ~ foundNumber:", foundNumber);

const users = [
  { name: "john", age: 13 },
  { name: "peter", age: 12 },
  { name: "jim", age: 11 },
];

const foundUser = users.find((item) => item.name === "peter");
console.log("🚀 ~ foundUser:", foundUser);
