/**
 * some array method
 *
 * array.some(cb)
 *
 * return true/false if ANY of the items match the given criteria
 */

const admins = [
  { name: "john", isAdmin: false },
  { name: "peter", isAdmin: true },
  { name: "jim", isAdmin: false },
];

const hasAdmin = admins.some((item) => item.isAdmin === true);
console.log("🚀 ~ hasAdmin:", hasAdmin);
