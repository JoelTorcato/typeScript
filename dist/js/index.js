"use strict";
// Sting, Boolean, Number, ...
let x = 10;
x = 16;
console.log(x);
// Inferencia x Annotation
let i = 15;
let a = 15;
// Tipos básicos
let firstName = "Joel";
let age = 30;
const inAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "Ana";
console.log(firstName);
// Object
const myNumbers = [3, 2, 1];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());
myNumbers.push(100);
console.log(myNumbers);
// Tuplas -> Tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true]
// Object literals -> {prop: value}
const user = {
    name: "Susana",
    age: 51,
};
console.log(user);
console.log(user.name);
// user.job: "Programador"
