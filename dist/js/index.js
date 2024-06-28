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
const Client = {
    name: "Susana",
    age: 51,
};
console.log(Client);
console.log(Client.name);
// Cliente.job: "Programador"
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
    Client.age +
    " de idade.").toUpperCase() /* Para colocar toda a frase em letras maiúsculas usando o toUpperCase(),
preciso de colocar 2 parênteses, e no final do segundo, na parte de baixo, coloco o método. */);
/* O toString() sempre sempre será identificado como uma string,
independentemente de o valor ser um number ou um boolean. */
console.log(typeof unionType.toString());
let ClienteId = "alô";
let productId = 10; // Ver porquê que não dá erro
console.log(typeof ClienteId);
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
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const Numbers = {
    n1: 7,
    n2: 10,
};
console.log(sumNumbers(Numbers));
console.log(multiplyNumbers(Numbers));
// Narrowing
// Checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    else
        console.log(`Não foi passado um número, foi passado um ${typeof info}.`);
}
doSomething(true); // Ver o que foi dito.
// Generics
function showArrayItems(array) {
    array.forEach((item) => {
        console.log;
    });
    const a1 = [1, 2, 3];
    showArrayItems(a1);
}
// Classes
class Cliente {
    constructor(name, age, role, isApproved) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.isApproved = isApproved;
    }
    showClienteName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showClienteRole(canShow) {
        if (canShow) {
            console.log(`A role do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
    showClienteAge(canShow) {
        if (canShow === "Sim" || canShow === true) {
            console.log(`A idade é de ${this.age}`);
            return;
        }
        console.log("A idade é inválida!");
    }
}
const Joel = new Cliente("Joel", 15, "Admin", true);
const Susana = new Cliente("Susana", 51, "Aluna", false);
const Pedro = new Cliente("Pedro", 54, "CEO", true);
const Simão = new Cliente("Simão", 18, "Admin", false);
console.log(Joel);
Susana.showClienteName();
Joel.showClienteRole(true);
Susana.showClienteRole(false);
Pedro.showClienteRole(true);
Simão.showClienteAge("Sim");
class Car {
    constructor(brand, wheels, commonColor, color, doors) {
        this.brand = brand;
        this.wheels = wheels;
        this.commonColor = commonColor;
        this.color = color;
        this.doors = doors;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
    showColor(common) {
        if (common === "Sim" || common === true) {
            console.log(`a cor do carro é comum e ela é ${this.color}`);
            return;
        }
        console.log(`a cor do carro não é comum!`);
    }
    isACar(isACar) {
        if (isACar) {
            console.log(`É um carro.`);
            return;
        }
        console.log(`Não é um carro.`);
    }
    showDoors() {
        console.log(`O carro tem ${this.doors} portas.`);
    }
}
const fusca = new Car("VW", 4, true, "white", 4);
const tesla = new Car("Tesla", 4, false, "orange", 4);
const mini = new Car("Mini", 4, true, "black", 2);
fusca.showBrand();
tesla.showBrand();
// Ver como fazer a resposta de cima ser igual á de baixo
tesla.showColor(false);
fusca.showColor("Sim");
fusca.isACar(false);
tesla.showDoors();
mini.showDoors();
// Herança
