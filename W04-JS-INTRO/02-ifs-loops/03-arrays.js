/**
 * [1, 2, 3, 4]
 */

const array = [1, 2, 3, 4, 5];
console.log("🚀 ~ array:", array.length);

array.push(6); // add to the END of the array
console.log("🚀 ~ array:", array);
array.push(7, 8, 9, 1, 1, 1);
console.log("🚀 ~ array:", array);

array.pop();
array.pop();
array.pop();
console.log("🚀 ~ array:", array);

if (array.includes(7)) {
  console.log("array has a 7");
}

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    array[i] += 5;
  }
}
console.log("🚀 ~ array:", array);

array.splice(1, 1);
console.log("🚀 ~ array:", array);
