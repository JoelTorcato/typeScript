// Sting, Boolean, Number, ...
let x: number = 10;
x = 16;
console.log(x);

// Inferencia x Annotation
let i = 15;
let a: number = 15;

// Tipos básicos
let firstName: string = "Ana";
let age: number = 30;
const inAdmin: boolean = true;

// String != string
console.log(typeof firstName);
firstName = "Joel";
console.log(firstName);

// Object
const myNumbers: number[] = [3, 2, 1];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());
myNumbers.push(100);
console.log(myNumbers);

// Tuplas -> Tuple
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];

// myTuple = [true, false, true]

// Object literals -> {prop: value}
const Client: { name: string; age: number } = {
  name: "Susana",
  age: 51,
};
console.log(Client);
console.log(Client.name);

// Cliente.job: "Programador"

// Any
let w: any = 0;
w = "teste";
w = true;
w = [];

// Union type
let unionType: string | number = 2024;
unionType = "França";
console.log(
  (
    unionType.toString() +
    " Campeã e quem marcou o golo decisivo foi o " +
    firstName +
    " que tem " +
    Client.age +
    " de idade."
  ).toUpperCase() /* Para colocar toda a frase em letras maiúsculas usando o toUpperCase(), 
  preciso de colocar 2 parênteses, e no final do segundo, na parte de baixo, coloco o método. */
);

/* O toString() sempre sempre será identificado como uma string, 
independentemente de o valor ser um number ou um boolean. */
console.log(typeof unionType.toString());

// Type alias
type myIdType = number | string;
let ClienteId: myIdType = "alô";
let productId = 10; // Ver porquê que não dá erro

console.log(typeof ClienteId);

// Enum
// Tamanho de roupas (size: Pequeno, Médio, Grande, Muito grande)
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
  MG = "Muito Grande",
}

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
    camisa.name +
    " com o tamanho de " +
    camisa.size +
    ", só que temos um problema, ele não vive em portugal, ele vive na " +
    unionType
);

// Literal types
let teste: "positiva" | null;
// teste = "outrovalor"
teste = "positiva";
teste = null;
console.log(teste);

// Funções
function sum(a: number, b: number) {
  return a / b;
}

console.log(sum(2, 1));
// console.log(sum("alô", true))

function sayHelloTo(name: string): string {
  // Ver como se retorna um number.
  return `Hello ${name}`;
}
console.log(sayHelloTo("Susana"));

function logger(msg: string): void {
  console.log(msg);
}
logger("Teste!");

function greeting(greet: string, name?: string): void {
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

// Interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const Numbers: MathFunctionParams = {
  n1: 7,
  n2: 10,
};

console.log(sumNumbers(Numbers));
console.log(multiplyNumbers(Numbers));

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
