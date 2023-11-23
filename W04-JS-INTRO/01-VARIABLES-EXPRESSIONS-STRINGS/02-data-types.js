// single line comment
/**
 * multi line comments
 *
 */

// Primitive values
const speed = 100; // numbers - integer
const height = 17.5; // float number

// strings
const address = "berlin 100km";
const address2 = "paris";
const address3 = `athens`;
const distance = "199";

// boolean
const smokes = true;
const pregnant = false;

// JS is a dynamically typed language
let variable = 45;
variable = "string";
variable = false;

// ;
// ; is mandatory until it isn't
// ASI = Automatic Semicolon Insertion
const john = "doe";

const lastName = null; // nothing. Intetionally

const firstName = undefined; // nothing

// Arrays
// () = Parenthesis
// [] = Square Brackets
// {} = Curly Braces

const tasks = ["pay taxes", "take out dog", "sleep"];
console.log("Hello World");
console.log(tasks[2]);

// Objects

const studentAddress = {
  city: "Berlin", // this is a property. "city" is called a key and Berlin is called value
  street: "Abc",
  number: "24",
  country: "DE",
  number: 123,
  array: [1, 2, 3],
  object: { a: 1, b: 2 },
};
console.log(studentAddress.city);
