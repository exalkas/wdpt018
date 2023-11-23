/**
 * spread operator: "..."
 *
 * applies to arrays, objects and strings
 *
 * it takes items out of them (arrays, objects and strings)
 */

const myName = "this is my name";
console.log("🚀 ~ myName:", myName);
console.log("🚀 ~ myName:", ...myName);

const array = ["banana", "cherry", "orange", "strawberry"];
console.log("🚀 ~ array:", array);
console.log("🚀 ~ array:", ...array);

// rest operator
function findMax(...numbers) {
  // spread operator
  const max = Math.max(...numbers);
  console.log("🚀 ~ max:", max);
  console.log("🚀 ~ numbers:", numbers);
}
findMax(1, 2, 3, 4, 5, 6, 7, 78888, 8, 8, 8, 8, 8, 8);
/**
 * spread operator can be used:
 * when calling functions/methods
 * when merging arrays or objects
 * when copying arrays or objects
 */

// Merging arrays
const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];

const numbers3 = [...numbers1, ...numbers2];
console.log("🚀 ~ numbers3:", numbers3);
console.log("🚀 ~ numbers3:", [...numbers3, 222]); // USED IN REACT. It's like pushing an item to an array

// copying an array
const numbers4 = [...numbers3];
console.log("🚀 ~ numbers4:", numbers4);

// object merging
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = {
  ...obj1,
  ...obj2,
};
console.log("🚀 ~ obj3:", obj3);

// copying obj3 into obj4
const obj4 = { ...obj3 };
console.log("🚀 ~ obj4:", obj4);
