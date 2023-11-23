/**
 * functions
 *
 * function nameOfTheFunction() {
 *
 *  code (the commands) go here
 * }
 */

// function declaration
function helloWorld() {
  console.log("Hello world");
  console.log("Hello world2");
}

// calling(execute) the function
helloWorld();

function functionWithParameters(weather, name) {
  // "weather" it's like a variable declaration. "Weather" is called parameter

  console.log(`It is ${weather}`);

  console.log("Have a nice day", name, "abc" + " 123");
}

functionWithParameters("sunny"); // "sunny" is called an argument. It's the value that will go to the "weather" parameter

functionWithParameters("rainy", "1", 2, 3, 4, [], {}, false);
functionWithParameters("cloudy", "John");
/////

// Here is GLOBAL SCOPE

function scope() {
  // this is FUNCTION SCOPE

  let x = 0;
}

let x = 1;
console.log("🚀 ~  x:", x);

if (true) {
  // BLOCK SCOPE
  let x = 3;
  console.log("🚀 ~ x:", x);

  // VAR HAS NO BLOCK SCOPE
  var y = 0;
  z = 0; // VAR TYPE OF DECLARATION ALSO. DON'T USE IT!!!
}
console.log("🚀 ~ z:", z);
console.log("🚀 ~ y:", y);

/**
 * HOISTING
 */

const variableHere = 34; // first declare it, then use it
console.log("here", variableHere);

functionHere();

function functionHere() {
  // functions get HOISTED
  console.log("Declared after calling it");
}
console.log("----------------------------");
/**
 * returning values
 *
 * FUNCTIONS ALWAYS RETURN SOMETHING. AT WORST THEY WILL RETURN UNDEFINED
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  console.log(b - a);
}

console.log(add(1, 2));
const total = add(3, 4);
console.log("🚀 ~ total:", total);

const result = subtract(5, 6);
console.log("🚀 ~ result:", result);
console.log("🚀 ~ result:", subtract(4, 5));
