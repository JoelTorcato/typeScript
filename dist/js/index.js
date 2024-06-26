"use strict";
// Sting, Boolean, Number, ...
let x = 10;
x = 16;
console.log(x);
// Inferencia x Annotation
let i = 15;
let a = 15;
// Tipos básicos
let firstName = "Ana";
let age = 30;
const inAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "Joel";
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
// Any
let w = 0;
w = "teste";
w = true;
w = [];
// Union type
let unionType = 2024;
unionType = "França";
console.log((unionType.toString() +
    " Campeã e quem marcou o golo decisivo foi o " +
    firstName +
    " que tem " +
    user.age +
    " de idade.").toUpperCase() /* Para colocar toda a frase em letras maiúsculas usando o toUpperCase(),
preciso de colocar 2 parênteses, e no final do segundo, na parte de baixo, coloco o método. */);
/* O toString() sempre sempre será identificado como uma string,
independentemente de o valor ser um number ou um boolean. */
console.log(typeof unionType.toString());
