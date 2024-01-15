// console.log(globalThis);
console.log(process.argv.slice(2));

// const total = process.argv.slice(2).reduce((acc, item) => {
//   console.log("acc: ", acc, "item", item);
//   return (acc += parseInt(item));
// }, 0);
// console.log("🚀 ~ total:", total);

// since node version 17.5 there is fetch available

async function fetchData(category) {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
  );
  console.log("🚀 ~ response:", response);
}

const cat = process.argv.slice(2)[0];
fetchData(cat);
