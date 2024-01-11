// caching

function heavyCalc(a) {
  let total = 0;

  for (let i = a; i < 100000000; i++) {
    total += i;
  }

  return total;
}

// console.log(heavyCalc(10));

const cache = {};

function memoise(a) {
  if (cache[a] !== undefined) {
    console.log("Found result in cache", cache[a]);
  } else {
    cache[a] = heavyCalc(a);
    console.log("calculated result was not in cache", cache[a]);
  }
}

memoise(10);
memoise(10);
memoise(15);
memoise(15);
memoise(20);
memoise(20);
