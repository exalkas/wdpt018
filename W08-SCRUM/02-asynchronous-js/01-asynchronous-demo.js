// setTimeout is asynchronous executed
setTimeout(() => {
  console.log("5");
}, 2000);
console.log("1");

setTimeout(() => {
  console.log("4");
}, 2000);

console.log("2");
console.log("3");
