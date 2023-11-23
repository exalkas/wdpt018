const result = 23; // 23 is number literal

const studentA = {
  // "{}" are called Object literal
  name: "john",
  city: "berlin",
  age: 21,
  smoker: true,
  favBooks: [1, 2, 3],
  address: {
    a: 1,
    b: 2,
  },
  married: undefined,
  children: null,
  print: function () {
    // METHOD
    console.log("printing");
  },
  printAll() {
    console.log(this);
    console.log("name: ", this.name);
  },
};

console.log("this is line 23:", studentA.name);
studentA.printAll();

const studentB = new Object();
studentB.name = "Jim";
studentB.printAll = function () {
  console.log(this);
  console.log("name: ", this.name);
};

// ARROW FUNCTIONS DON'T HAVE THEIR OWN "THIS"
studentB.printArrow = () => {
  console.log("--------------", this);
};

studentB.name = "New Jim";
console.log("🚀 ~ studentB:", studentB);

studentB.printArrow();

console.log(globalThis);

function demo() {
  console.log("hello");
}
demo.test = 232;
console.log("🚀 ~ demo:", demo);

console.log("-------------------------------");

// class is like a blueprint.
// Student is like the recipe
class Student {
  constructor(name, city) {
    // must have this name. it gets executed when the "new" keyword is called
    console.log("A new student is being created");
    this.name = name;
    this.city = city;
  }

  printName() {
    console.log(`${this.name}, ${this.city}`);
  }
}

// john is the instance of the class.
// john is the dish
const john = new Student("john", "berlin");
console.log("🚀 ~ john:", john);
const jim = new Student();

john.printName();

console.log(Math);
