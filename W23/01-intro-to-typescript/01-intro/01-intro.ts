// int age = 4; in C
// age = 54 in Python
// const age = 4; in js

// TS "understood" the type of the variable = inferred
// the value implicitly
let firstName = "John";
// firstName = 5; error
firstName = "5";

// explicit variable declaration
let age: number = 5;
// let age = 4 inferred
// age = true; error

let smoking: boolean = true;

let hobbies: string[] = ["walking", "running", "hiking"];
let numbers: number[] = [1, 2, 3, 4];

// numbers.push("abc");

// Objects
let student: { name: string; age: number } = {
  name: "John Doe",
  age: 20,
};

let car: {
  make: string;
  model?: string; //? makes the property optional
  year?: number;
} = {
  make: "Porsche",
};

let fruit: any = "apple";
fruit = 3;

// unions
let color: string | number = "blue"; // "|" means that variable can be of any of those types

color = 255;
