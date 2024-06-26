// Sting, Boolean, Number, ...
let x: number = 10;
x = 16;
console.log(x);

// Inferencia x Annotation
let y = 15;

// Tipos Básicos
let firstName: string = "Joel";
let age: number = 30;
const inAdmin: boolean = true;

// String != string
console.log(typeof firstName);
firstName = "Pedro";
console.log(firstName);

// Object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase())
console.log(firstName.toUpperCase());
myNumbers.push(7);
console.log(myNumbers);
