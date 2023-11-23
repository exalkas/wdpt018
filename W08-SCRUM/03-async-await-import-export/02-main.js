// named import
import { add, user } from "./02-math-functions.js";
import arrowFunction, { array } from "./02-math-functions.js";

// default import
import SUBTRACT_CUSTOM_NAME from "./02-default-export.js";
console.log("🚀 ~ SUBTRACT_CUSTOM_NAME:", SUBTRACT_CUSTOM_NAME(5, 1));

console.log(
  "🚀 ~ array:",
  array.map((item) => item + 1)
);
console.log("🚀 ~ user:", user);

console.log(add(1, 2));

arrowFunction();
