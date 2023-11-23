/**
 * Destructuring
 */

const user = {
  name: "drago",
  age: 44,
  city: "paris",
};

const nameOld = user.name;
const ageOld = user.age;

/**
 * Object destructuring
 *
 * the names of the variables MUST match the property names
 */
const { name, age } = user;
console.log("🚀 ~ name2, age:", name, age);

// we can use other names for the variables with the ":" operator
const { name: nameNew } = user;
console.log("🚀 ~ nameNew:", nameNew);

const { name: name3, age: age3, city = "berlin" } = user;
console.log("🚀 ~ name3, age: age3, city:", name3, age3, city);

// In React Object destructuring
// the "function hanndleClick()" is called function signature
function handleClick({ name, age, city }) {
  console.log("HandleClick:", name, age, city);
}
handleClick(user);

/**
 * Array destructuring
 */

const array = ["banana", "cherry", "orange", "strawberry"];

const banana1 = array[0];

const [banana, cherry, orange] = array;
console.log("🚀 ~ banana, cherry, orange:", banana, cherry, orange);

const [banana2, , orange2] = array;
console.log("🚀 ~ banana2, , orange2:", banana2, orange2);

const [ban3, , orange3, kiwi3 = "kiwi"] = array;
console.log("🚀 ~ kiwi3:", kiwi3);

// in react array destructuring
function useState() {
  const total = 0;
  const time = "23:22";
  return [total, time];
}

const [var1, var2] = useState();
console.log("🚀 ~ result:", var1, var2);
