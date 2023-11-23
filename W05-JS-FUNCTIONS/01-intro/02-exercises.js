/**
 * 01 easy
 * Crate an array named myLuckyNumbers with the following numbers: 1,2,3,4,5,6,7,8,9,10
 * Create a function that sums all the numbers of the array
 */

// THIS VARIABLE IS AT THE GLOBAL SCOPE = AVAILABLE TO ALL IN THIS FILE
const myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcTotal() {
  let result = 0;

  for (let i = 0; i < myLuckyNumbers.length; i++) {
    result += myLuckyNumbers[i];
  }

  return console.log("🚀 ~ result:", result);
}

console.log(calcTotal());
/**
 * 02 easy
 * Write a function toArray that takes 2 values and returns these values in an array.
 * Example: toArray(5, 9) should return the array [5, 9]
 */

function toArray(a, b) {
  const array = [];

  array.push(a, b);
  console.log("🚀 ~ array:", array);

  return array;
}
console.log(toArray(5, 9));

const random = Math.random(); // returns a number
console.log("🚀 ~ random:", random);
/**
 * 03 easy
 * Write a function getFirstElement that takes an array and returns the first element of the array.
 * Example: getFirstElement([1, 2]) should return 1
 */

function getFirstElement(array) {
  console.log(array[0]);
  return array[0];
}
console.log(getFirstElement([1000, 3, 2, 5, 6, 7]));
/**
 * 07
 * Mars Exploration: Our spaceship in Mars is in trouble and transmits back to us SOS
 * There are cosmic rays interfering though and the signal arrives distorted.
 * Write a function that accepts the message from our spaceship and returns
 * the number of characters that are distorted.
 * For example:
 * SOSSOSSOS = 0 (no distorted characters)
 * SOSSOT = 1 (one character has been distorted)
 * SOSOOSOSOSOSOSSOSOSOSOSOSOS = 12
 * SOSSPSSQSSOR = 3
 */
