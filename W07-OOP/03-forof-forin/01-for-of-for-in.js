/**
 * for of => for arrays
 * for in => for objects
 */

const numbers = [1, 23, 4, 5];

for (let number of numbers) {
  console.log(number);
}

const student = {
  name: "john",
  city: "berlin",
  tel: "123",
};

// applying for of to an object gives type error
// for (let property of student) {
//   console.log("🚀 ~ property:", property);
// }

for (let key in student) {
  console.log("🚀 ~ key:", key);
  console.log("🚀 ~ key:", student[key]);
}

student.name = "new name";

// student[name] = "new name"; //  error. name is not defined

student["name"] = "another name";
console.log("🚀 ~ student finally name:", student.name);

student["123"] = "abc";
console.log("🚀 ~ student:", student);

// using for in with an array
for (let key in numbers) {
  // key is the index of the array
  console.log("🚀 ~ key:", key);
  console.log("🚀 ~ key:", numbers[key]);
}
