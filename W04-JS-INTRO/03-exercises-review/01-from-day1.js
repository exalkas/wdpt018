/**
 * Exercise 11
 * Write a program that has two strings and prints the
 * first occurrence of the second string in the first string.
 * Ignore the case sensitivity.
 * Example: Two strings: 'bit','it' should print 1
 */

const string1 = "bit",
  string2 = "IT";

const string1Lowered = string1.toLowerCase();
const string2Lowered = string2.toLowerCase();

console.log("🚀 ~ string1:", string1Lowered.indexOf(string2Lowered));
