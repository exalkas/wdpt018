/**
 * forEach method
 *
 * IT CAN BE USED ONLY WITH ARRAYS
 *
 * syntax: array.forEach(cb)
 *
 * IMPORTANT: this methods DOESN'T RETURN ANYTHING
 */

function forEach(arrayLocal, cb) {
  for (let i = 0; i < arrayLocal.length; i++) {
    cb(arrayLocal[i]);
  }
}

const array = [1, 2, 3, 4, 5];

function print(item) {
  console.log(`Item: ${item}`);
}

function addToList(item) {
  console.log("<li>", item, "</li>");
}
forEach(array, print);
forEach(array, addToList);

const fruits = ["apple", "banana", "orange", "kiwi"];

// 1.  pass a cb
fruits.forEach(print);

// 2. write the cb inline
fruits.forEach((fruit) => console.log("item is", fruit));
fruits.forEach(function (item) {
  console.log("item is", item);
});

// the cb can accept up to 3 parameters: (array_item, index, array)
fruits.forEach((fruit, index, array) =>
  console.log("fruit is", fruit, "and index is", index, "array is", array)
);
