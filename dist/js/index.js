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
let userId = "alô";
let productId = 10; // Ver porquê que não dá erro
console.log(typeof userId);
// Enum
// Tamanho de roupas (size: Pequeno, Médio, Grande, Muito grande)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
    Size["MG"] = "Muito Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa branca",
    size: Size.MG,
};
console.log(camisa.name.toUpperCase());
const chapeu = {
    name: "Chapeu do Benfica",
    size: Size.P,
};
chapeu.name = "Chapeu do Sporting";
console.log("O " +
    firstName +
    " tem " +
    age +
    " anos e comprou um chapeu do tamanho " +
    chapeu.size +
    " cujo o nome é " +
    chapeu.name.toUpperCase() +
    ", também comprou uma " +
    camisa.name +
    " com o tamanho de " +
    camisa.size +
    ", só que temos um problema, ele não vive em portugal, ele vive na " +
    unionType);
// Literal types
let teste;
// teste = "outrovalor"
teste = "positiva";
teste = null;
console.log(teste);
// Funções
function sum(a, b) {
    return a / b;
}
console.log(sum(2, 1));
// console.log(sum("alô", true))
function sayHelloTo(name) {
    // Ver como se retorna um number.
    return `Hello ${name}`;
}
console.log(sayHelloTo("Susana"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(greet, name) {
    /* O ponto de ? (interrugação), fala que é opcional;
    os valores opcionais ficam sempre no final. */
    if (name) {
        console.log(`Alô ${greet} ${name}`);
        return;
    }
    console.log(`Alô ${greet}`);
}
greeting("Senhor");
greeting("Senhor", "Carlos");
