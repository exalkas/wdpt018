/**
 * rest operator: "..."
 */

function demoRest(a, b, c, ...theRest) {
  console.log("🚀 ~ a,b,c, ...theRest:", a, b, c, ...theRest);
}

demoRest(1, 2, 3, 4, 5, 6, 7, 78888, 8, 8, 8, 8, 8, 8);

// the rest operator when in function signature creates an array
function findMax(...numbers) {
  console.log("🚀 ~ numbers:", numbers);
}
findMax(1, 2, 3, 4, 5, 6, 7, 78888, 8, 8, 8, 8, 8, 8);

const array = ["banana", "cherry", "orange", "strawberry"];

// rest operator MUST be always LAST
const [banana, ...fruits] = array;
console.log("🚀 ~ banana, ...fruits:", banana, fruits);

const iphone = {
  id: 1,
  name: "Apple iPhone 11 (128GB) - Yellow",
  descr:
    "6.1-inch (15 cm) IPS LCD with a resolution is 1792 × 828 pixels (1.4 megapixels) at a pixel density of 326 PPI with a maximum brightness of 625 nits and a 1400:1 contrast ratio",
  ram: "128 GB",
  image: "https://m.media-amazon.com/images/I/714Mg+6MoFL._SX522_.jpg",
  price: 499,
  rating: 4.5,
  reviews: 259,
  sold: 123,
};

const { id, ...rest } = iphone;
console.log("🚀 ~ id, ...rest:", id, rest);
