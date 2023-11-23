/**
 * findIndex array method
 *
 * syntax: array.findIndex(cb)
 *
 * returns the index of the FIRST item found and -1 if the item was not found
 */

const users = [
  { name: "john", age: 13 },
  { name: "peter", age: 12 },
  { name: "jim", age: 11 },
];

const index = users.indexOf("peter");
console.log("🚀 ~ index:", index);

const indexTurbo = users.findIndex((item) => item.name === "peter");
console.log("🚀 ~ indexTurbo:", indexTurbo);

users.splice(indexTurbo, 1);
console.log("🚀 ~ users:", users);
