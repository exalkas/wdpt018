/**
 * every array method
 *
 * syntax: array.every(cb)
 *
 * return true/false if ALL items match the criteria
 */

const numbers = [1, 2, 2, 3, 4, 322323];

const hasNegative = numbers.every((item) => item > 0);
console.log("🚀 ~ hasNegative:", hasNegative);
