// Conditionals = take decisions

/**
 * Ternary operator
 *
 * Accepts 3 operands
 *
 * Operand is in 2 + 5 expression the + is the operator, 2 and 5 are called operands
 *
 * expression that is getting converted to true/false ? what happens if true
 * : what_happens_if_false
 */

let money = 0;
let time = 3;

const shouldIGo = money > 1 ? "go" : "don't go";
console.log("🚀 ~ shouldIGo:", shouldIGo);

const sum = 3 + 5 ? "ok" : "not ok"; // 8 is converted to true
console.log("🚀 ~ sum:", sum);

/**
 * Truthy values: any value that is not:
 * 0
 * false
 * ""
 * null
 * undefined
 *
 * everything else is a truthy value
 *
 */

const truthy1 = " " ? "it's true" : "not true";
console.log("🚀 ~ truthy1:", truthy1);

/**
 * Logical Operators
 *
 * && BOTH operands must be TRUTHY and the result will be true
 * if ANY operand is NOT true then the result will be false
 */

money = 3;
time = 0;

const timeAndMoney =
  money > 0 && time > 0 ? "You are good" : "there is a problem";
console.log("🚀 ~ timeAndMoney:", timeAndMoney);

/**
 * | is called pipe
 *
 * || is called the OR operator
 * if ANY is true it returns true
 * if BOTH are false it returns false
 */
money = 1;
time = 0;

const timeOrMoney =
  money > 0 || time > 0 ? "You are good" : "there is a problem";
console.log("🚀 ~ timeAndMoney:", timeOrMoney);
console.log("🚀 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/**
 * ! Not operator
 *
 * converts what is right of it to the opposite true/false. (if needed it converts the value to boolean)
 */
time = 0;
const notTime = !time ? "You are good" : "there is a problem";
console.log("🚀 ~ timeAndMoney:", notTime);
console.log("🚀 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/**
 * >,<
 * >=, <=, =>, =<
 *
 * == equality operator
 * === strict equality operator, it checks for the type of operands as well
 * != not equal
 * !== strict not equal, it checks for the type of operands as well
 */
money = 1;
time = "1";
const equality = time === money ? "all equal" : "not equal";

console.log("🚀 ~ equality:", equality);
const strictNotEquality =
  time !== money ? "they are not strictly equal" : "they are strictly equal";
console.log("🚀 ~ equality:", strictNotEquality);

console.log("🚀 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/**
 * statements vs expressions
 *
 * statements are commands
 *
 * if statement
 *
 * if (expression which gets converted to true/false) {
 *  block code
 * }
 */

const name = "john-peter";

if (name === "john") {
  // if the expression is true, the code in the {} will be executed
  console.log("His name is correct");
} else {
  // the expression is falsy
  console.log("His name is NOT correct");
}

const weather = "cloudy";

if (weather === "sunny") {
  console.log("You should wear a t-shirt");
} else if (weather === "rainy") {
  console.log("You should wear a rain coat");
} else {
  console.log("I don't know what you should wear");
}
