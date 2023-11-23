// Haskell

const numbers = [1, 2, 3, 8, 12];

// Imperative = specify exactly what to do
function evenImperative() {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i] * 2);
    }
  }

  return result;
}

console.log(evenImperative());

// Declarative = tell the computer what you want
function evenDeclarative() {
  return numbers.filter((item) => item % 2 === 0).map((item) => item * 2);
}

console.log(evenDeclarative());

// return <div>hello</div>
