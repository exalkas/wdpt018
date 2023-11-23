/**
 * Higher Order Functions
 *
 * they accept as parameter another function
 * and/or they return a function
 */

// Functions are basically objects
function functionsAreObjects() {}
console.log("🚀 ~ functionsAreObjects:", typeof functionsAreObjects);
functionsAreObjects.alkis = "hello";
console.log("🚀 ~ functionsAreObjects:", functionsAreObjects);

function hof(parameter) {
  parameter();
}

function print() {
  console.log("this is print function");
}

hof(print); // this will call the print method inside of HOF

function add() {
  console.log("this is add function");
}

// add is a callback function
hof(add); // we just pass the function WITHOUT calling it (no parenthesis)

/**
 * the functions that are being passed are called CALLBACK FUNCTIONS
 */

function printGreetings(greeting, cb) {
  cb(greeting);
}

function printSimple(parameter) {
  console.log(parameter);
}
function printTurbo(parameter) {
  console.log("🚀🚀🚀🚀🚀 " + parameter + " 🚀🚀🚀🚀🚀");
}

printGreetings("Ola muchachos", printSimple);
printGreetings("Geia sou", printTurbo);

function greetingsNoHof(greeting, type) {
  if (type === "simple") {
    console.log(greeting);
  } else if (type === "turbo") {
    console.log("🚀🚀🚀🚀🚀 " + greeting + " 🚀🚀🚀🚀🚀");
  }
}
