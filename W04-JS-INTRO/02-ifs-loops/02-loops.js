/**
 * Loops
 *
 * for loop
 *
 * for (expression; expression which must be truthy; expression ) {
 *  block of code
 * }
 */

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");

console.log("🚀 ~~~~~~~~~~~~");
for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}

const string = "the brown fox";

for (let i = 0; i < string.length; i++) {
  if (string[i] === "o") {
    console.log(string[i]);
    // string[i] === "e";
  }
}
console.log("🚀 ~ string:", string);

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 10; i >= 1; i -= 2) {
  console.log(i);
}

//
let number = 3;
number = number + 3;
console.log("🚀 ~ number:", number);
number /= 3;
console.log("🚀 ~ number:", number);

/**
 * while loop
 *
 * while (expression that gets converted to true) {
 *
 * }
 */

let counter = 0;

while (counter <= 10) {
  console.log(counter);
  counter++;
}

/**
 * do while loop
 *
 * do {
 *
 * } while (expression converted to true)
 */

let time = 5;

do {
  console.log("wake up");
  time++;
} while (time < 10);

for (let i = 0; i < 10; i++) {
  if (i > 5) break; // stop the loop
  if (i !== 5) continue; // continue means skip. do not continue further in the loop

  console.log(i);
}
