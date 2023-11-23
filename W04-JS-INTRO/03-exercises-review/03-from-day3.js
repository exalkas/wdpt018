/**
 * 8. Write a program that takes in a string and prints the number of words in the string. You can assume that words are separated by spaces.
 *
 * e.g. given string 'Hello world, how are you?' it should print 5
 *
 */

const string8 = "Hello world, how are you?";
const splitted = string8.split(" ");
console.log("🚀 ~ string8:", splitted.length);

/**
 * 10. Write a program that takes in a number and prints a new array with all the numbers from 1 to that number.
 *
 * e.g. given number 5 it should print [1, 2, 3, 4, 5]
 */

const start10 = 10;
const array = [];
for (let i = 1; i <= start10; i++) {
  array.push(i);
}
console.log("🚀 ~ array:", array);

/**
 02
String Palindrome
A string is a palindrome if it is read the same from forward or backward. For example,
dad reads the same either from forward or backward. So the word dad is a palindrome.
Similarly, madam is also a palindrome.
Create a function that returns if a string is a palindrome
Optional: make an one liner solution
*/

const string = "anna";

const stringArray = string.split(""); // convert string to an array
console.log("🚀 ~ stringArray:", stringArray);

const stringArrayReversed = stringArray.reverse(); // reverse the array
console.log("🚀 ~ stringArrayReversed:", stringArrayReversed);

const arrayToString = stringArrayReversed.join(""); // convert from array to string
console.log("🚀 ~ arrayToString:", arrayToString);
console.log("🚀 ~ It's a palindrome:", arrayToString === string);
