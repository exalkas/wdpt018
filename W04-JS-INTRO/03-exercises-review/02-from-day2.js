/**
 *  Exercise 05
 *  Write a program that has 2 numbers and checks whether both numbers are
 *  in the range 40..60 or in the range 70..100 inclusive and prints the result.
 */

const number5 = 105;

const inFirstRange = number5 >= 40 && number5 <= 60;
const inSecondRange = number5 >= 70 && number5 <= 100;

console.log("🚀 ~ inFirstRange:", inFirstRange);
console.log("🚀 ~ inSecondRange:", inSecondRange);
console.log("🚀 ~ inRange:", inFirstRange === true || inSecondRange === true);

/**
 * Exercise 06
 * Write a program that computes the difference between a specified number and 19.
 * It should print their difference if the number is less than 19
 * and triple their absolute difference if the specified number is greater than 19
 *
 * e.g. if the number is 20, then it should print 3 and if it is 10, it should print 9.
 */

const number6 = 20;

const isGreater = number6 > 19;
console.log("🚀 ~ isGreater:", isGreater);

if (isGreater === true) {
  console.log("🚀 ~ isGreater:", (number6 - 19) * 3);
} else {
  console.log("🚀 ~ is NOT Greater:", 19 - number6);
}

console.log("🚀 ~ Absolute ", Math.abs(-999));

/**
 * Exercise 09
 * Write a program that prints a given string.
 * If the given string begins with "Py" then print the original string.
 * Else print the string adding "Py" in front of it.
 */

const string9 = "Pyhello";

if (string9.startsWith("Py")) {
  console.log("String9", string9);
} else {
  console.log("Py" + string9);
}

if (string9[0] === "P" && string9[1] === "y") {
  console.log("String9", string9);
} else {
  console.log("Py" + string9);
}

// prettier-ignore
if (string9.slice(0,2) === "Py") {
  console.log("String9", string9);
} else {
  console.log("Py" + string9);
}

/**
 * Exercise 11 - could be challenging
 * Write a program that checks whether the last digit of three given positive integers
 * is the same
 *
 * e.g. the last digit of 41, 31 and 51 is the same
 */

const num1 = 11,
  num2 = 21,
  num3 = 31;

const rem1 = num1 % 10;
console.log("🚀 ~ rem1:", rem1);
const rem2 = num2 % 10;
console.log("🚀 ~ rem1:", rem2);
const rem3 = num3 % 10;
console.log("🚀 ~ rem1:", rem3);

const lastDigitIsCommon = rem1 === rem2 && rem2 === rem3;
console.log("🚀 ~ lastDigitIsCommon:", lastDigitIsCommon);
