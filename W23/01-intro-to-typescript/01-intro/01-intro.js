"use strict";
// int age = 4; in C
// age = 54 in Python
// const age = 4; in js
// TS "understood" the type of the variable = inferred
// the value implicitly
let firstName = "John";
// firstName = 5; error
firstName = "5";
// explicit variable declaration
let age = 5;
// let age = 4 inferred
// age = true; error
let smoking = true;
let hobbies = ["walking", "running", "hiking"];
let numbers = [1, 2, 3, 4];
// numbers.push("abc");
// Objects
let student = {
    name: "John Doe",
    age: 20,
};
let car = {
    make: "Porsche",
};
let fruit = "apple";
fruit = 3;
// unions
let color = "blue"; // "|" means that variable can be of any of those types
color = 255;
