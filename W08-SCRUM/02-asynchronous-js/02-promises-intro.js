/**
 * promise is an OBJECT
 *
 * a promises has state:
 * 1. pending
 * 2. kept = resolved
 * 3. broken = rejected
 */

const promise = new Promise(callback);

function callback(resolve, reject) {
  if (true) {
    resolve();
  } else {
    reject();
  }
}

// How to use/consume a promise
// in the then we write the cb that executes on resolving (keeping) the promise
promise
  .then(() => {
    console.log("Promise Kept");
  })
  .catch(() => {
    console.log("Promise was broken");
  })
  .finally(() => console.log("It executes in any case"));
