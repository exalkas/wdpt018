/**
 * Map array method
 *
 * syntax: array.map(cb)
 * IMPORTANT: returns a new array
 */

const prices = [1.2, 10.34, 20, 13];

function addEuroSymbol(item) {
  console.log(item, "€");

  return item + "€";
}

const pricesWithEuro = prices.map(addEuroSymbol);
console.log("🚀 ~ prices:", pricesWithEuro);

function addVat(item) {
  return (item * 1.19).toFixed(2);
}

// map with function as cb
const pricesWithVat = prices.map(addVat);
console.log("🚀 ~ pricesWithVat:", pricesWithVat);

// map with inline cb
const pricesWithVatInline = prices.map((item) => {
  return (item * 1.19).toFixed(2);
});
console.log("🚀 ~ pricesWithVatInline:", pricesWithVatInline);

const names = ["john", "monika", "alena", "rebeka", "joao", "tayfun"];

const namesList = names.map((item) => `<li>${item}</li>`);

console.log("🚀 ~ namesList:", namesList);
