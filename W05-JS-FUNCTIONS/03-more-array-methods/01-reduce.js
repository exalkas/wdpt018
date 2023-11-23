/**
 * reduce array method
 *
 * syntax: array.reduce(cb, initial_value)
 *
 * returns whatever type is the initial value
 */

const numbers = [10, 2, 3, 4];

function handleReduce(acc, item) {
  console.log("🚀 ~ acc:", acc, item);

  return (acc += item);
}

// initial value is 0
const total = numbers.reduce(handleReduce, 0);
console.log("🚀 ~ total:", total);
console.log("🚀 !!!!!!!!!!!!!!!!!!!!");

const total2 = numbers.reduce((acc, item) => {
  // no initial value

  // first iteration acc is the first item in the array and
  // "item" is the 2nd
  console.log("🚀 ~ acc, item:", acc, item);

  acc += item;
  console.log("🚀 ~ acc:", acc);

  return acc;
});
console.log("🚀 !!!!!!!!!!!!!!!!!!!!");
const words = ["hello", "world", "guys"];

const greeting = words.reduce((acc, item) => (acc += `${item} `), "");
console.log("🚀 ~ greeting:", greeting);
