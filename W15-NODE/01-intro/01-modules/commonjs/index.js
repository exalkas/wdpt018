// default import
const add = require("./functions");
const addAnotherName = require("./functions");

// named import
const { someArray } = require("./namedExports");
console.log("🚀 ~ someArray:", someArray);
const { someObject, age, add2 } = require("./namedExports");
console.log("🚀 ~ someObject, age:", someObject, age);

console.log("this is the main file");
console.log(add(1, 34));
console.log(addAnotherName(1, 34));
console.log(add2(1, 3555));
