// Objects are being stored as their address in the heap memory
const name = "abc";
const objA = {};
const objB = {};

console.log(objA === objB);

function fnA() {}
function fnB() {}
console.log(fnA === fnB);
