/**
 * filter array method
 *
 * syntax: array.filter(cb)
 *
 * IMPORTANT: returns an array
 *
 * purpose: filters an array based on criteria set in the cb
 */

const news = [
  "nobody died today",
  "new model from bmw",
  "public transport free tomorrow",
];

//filter the news with word 'new'

function filterNew(item) {
  return item.includes("new");
}

const filteredNews = news.filter(filterNew);
console.log("🚀 ~ filteredNews:", filteredNews);

// can be used to delete items from an array
const numbers = [1, 2, 2, 3, 54, 45];

const newNumbers = numbers.filter((item) => {
  return item > 10;
});
console.log("🚀 ~ newNumbers:", newNumbers);
