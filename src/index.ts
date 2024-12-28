// String, Boolean, Number, ...
let x: number = 15; // let (Mutability)
const y = "String"; 
var h: boolean = true;
console.log(x, y, h);

// Inferencia x Annotation
let i = false; // Inferencia
let a: number = 15; // Annotation

console.log(a);

// Tipos básicos
let firstName: string = "Joel";
let age: number = 30;
const inAdmin: boolean = true;

// String != string
console.log(typeof firstName);
firstName = "Joel";
console.log(firstName);

// Object
const myNumbers: number[] = [1, 2, 3, 4];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(100, 30);
myNumbers.unshift(0, -1);
console.log(myNumbers);

// Review objects better 

// Tuplas -> Tuple
let myTuple: [number, string, string[]]; // string[] = Array
myTuple = [5, "teste", ["a", "b"]];
let yourTuple: [string, string, number]; 
yourTuple = ["Joel", "Fernandes", 16];
console.log(yourTuple[1]);

// string != string[]

// myTuple = [true, false, true]

// Object literals -> {prop: value}
const Client: { name: string; age: number, pay: boolean} = {
  name: "Susana",
  age: 5819,
  pay: true
};
console.log(Client);
console.log(Client.age);

// Cliente.job: "Programador"

// Any
let w: any = 0;
w = "teste";
w = true;
w = [];

// Union type
let unionType: string | number = 2024;
unionType = "Carro";
console.log(
  (
    unionType.toString() +
    " Campeã e quem marcou o golo decisivo foi o " +
    firstName.toUpperCase() +
    " que tem " +
    Client.age +
    " de idade."
  ) /* Para colocar toda a frase em letras maiúsculas usando o toUpperCase(), 
  preciso de colocar 2 parênteses, e no final do segundo, na parte de baixo, coloco o método. */
);

/* O toString() sempre sempre será identificado como uma string, 
independentemente de o valor ser um number ou um boolean. */
console.log(typeof unionType.toString());

// Type alias
type myIdType =  string | boolean;
let ClienteId: myIdType = "alô";
ClienteId = true;
// let productId: myIdType = 10;

console.log(typeof ClienteId);

// Enum
// Tamanho de roupas (size: Pequeno, Médio, Grande, Muito grande)
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
  MG = "Muito Grande",
  EG = "Extra Grande",
}

const camisola = {
  name: "Camisola branca",
  size: Size.EG,
};
console.log(typeof camisola.size);

const chapeu = {
  name: "Chapeu do Portugal",
  size: Size.P,
};
chapeu.name = "Chapeu do Benfica";

console.log(
  "O " +
    firstName +
    " tem " +
    age +
    " anos e comprou um chapeu do tamanho " +
    chapeu.size +
    " cujo o nome é " +
    chapeu.name.toUpperCase() +
    ", também comprou uma " +
    camisola.name +
    " com o tamanho de " +
    camisola.size +
    ", só que temos um problema, ele não vive em portugal, ele vive na " +
    unionType
);

// Literal types
let teste: "positiva" | null;
// teste = "outrovalor"
teste = "positiva";
console.log(teste.toUpperCase());

// Funções
function sum(a: number, b: number) {
  return a * b;
}

console.log(sum(3, 1));
// console.log(sum("alô", true))

function sayHelloTo(name: string): string {
  // Ver como se retorna um number.
  return `Hello ${name}`;
}
console.log(sayHelloTo("Pedro"));

function logger(msg: number): void {
  console.log(msg);
}
logger(123);

function greeting(greet: string, name?: string): void {
  /* O ponto de ? (interrugação), fala que é opcional;
  os valores opcionais ficam sempre no final. */
  if (name) {
    console.log(`Alô, ${greet} ${name}`);
    return;
  } else {
    console.log(`Alô, ${greet}`);
  }
}
greeting("Senhora");

// Interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
  // n3: string; Error
}

function sumNumbers(nums: MathFunctionParams) { // It was 'typed' by the interface
  return nums.n1 + nums.n2
}

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

function divideNumbers(nums: MathFunctionParams) {
  return nums.n1 / nums.n2;
}

const Numbers: MathFunctionParams = {
  n1: 10,
  n2: 2,
  // n3: 10 Error because it is not a number
};

console.log(sumNumbers(Numbers));
console.log(multiplyNumbers(Numbers));
console.log(divideNumbers(Numbers));

interface Names {
  n1: string,
  n2: string,
  n3: string,
}

function personNames(person: Names) {
  return person.n1
}

const People: Names = {
  n1: "Joel",
  n2: "João",
  n3: "Pedro"
}

console.log(personNames(People));


// Narrowing
// Checagem de tipos
function doSomething(info: number | boolean): void {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  } else
    console.log(`Não foi passado um número, foi passado um ${typeof info}.`);
}
doSomething(true); // Ver o que foi dito.

// Generics
function showArrayItems<T>(array: T[]) {
  array.forEach((item) => {
    console.log;
  });

  const a1 = [1, 2, 3];
  showArrayItems(a1);
}

// Classes
class Cliente {
  name;
  age;
  role;
  isApproved;

  constructor(name: string, age: number, role: string, isApproved: boolean) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.isApproved = isApproved;
  }
  showClienteName() {
    console.log(`O nome do usuário é ${this.name}`);
  }
  showClienteRole(canShow: boolean) {
    if (canShow) {
      console.log(`A role do usuário é: ${this.role}`);
      return;
    }
    console.log("Informação restrita");
  }
  showClienteAge(canShow: any) {
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

// Interfaces em classes
interface IVehicle {
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;
  commonColor;
  color;
  doors;

  constructor(
    brand: string,
    wheels: number,
    commonColor: boolean,
    color: string,
    doors: number
  ) {
    this.brand = brand;
    this.wheels = wheels;
    this.commonColor = commonColor;
    this.color = color;
    this.doors = doors;
  }
  showBrand(): void {
    console.log(`A marca do carro é: ${this.brand}`);
  }
  showColor(common: any): void {
    if (common === "Sim" || common === true) {
      console.log(`a cor do carro é comum e ela é ${this.color}`);
      return;
    }
    console.log(`a cor do carro não é comum!`);
  }
  isACar(isACar: boolean): void {
    if (isACar) {
      console.log(`É um carro.`);
      return;
    }
    console.log(`Não é um carro.`);
  }
  showDoors(): void {
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
class SuperCar extends Car {
  engine;

  constructor(
    brand: string,
    wheels: number,
    commonColor: boolean,
    color: string,
    doors: number,
    engine: number
  ) {
    super(brand, wheels, commonColor, color, doors);
    this.engine = engine;
  }
  showEngine(): void {
    console.log(`O motor do carro é ${this.engine}`);
    return;
  }
}
const a4 = new SuperCar("Audi", 4, true, "white", 4, 2.0);
console.log(a4);
a4.showEngine();

// Decorators
// Constructor decorator
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createAt = new Date();
    };
  };
}
@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const joel = new Person("Joel");
console.log(joel);

const test = "Second test";

console.log(test);
