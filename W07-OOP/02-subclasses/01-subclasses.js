class Person {
  constructor(name, address, email, siblings) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.siblings = siblings;
  }

  print() {
    console.log(`Name: ${this.name}, Address: ${this.address}`);
  }
}

class Student extends Person {
  constructor(name, address, email, siblings) {
    // super calls the constructor of the "Parent"
    super(name, address, email, siblings);
    this.grades = [];
  }
}

class Teacher extends Person {
  constructor(name, address, email, siblings) {
    super(name, address, email, siblings);
    this.subjects = [];
  }
}

class Admin extends Person {
  constructor(name, address, email, siblings) {
    super(name, address, email, siblings);
  }

  //   Overriding methods
  print() {
    console.log(`Admin Print Name: ${this.name}, Address: ${this.address}`);
  }
}

const john = new Student("john", "berlin", "a@a.com", ["a", "b"]);
console.log("🚀 ~ john:", john);
john.print();

const jane = new Admin("jane", "paris", "j@a.com");
jane.print();
