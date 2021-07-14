"use strict";
function sayHi(humanName) {
    alert(`Hello, ${humanName}!`);
}
sayHi("Luke Skywalker ");
//string
const bestShowEver = "Babylon 5";
//number
const a = 42;
const b = 3.14;
const c = 0xf00d;
const d = 0o744; // Zero followed by lower-case o
//boolean
const isThisTheBestBookEver = true;
//bigint; Solo si la versión de javascript es superior a E2020
const e = 42n;
//simbolos
const f = Symbol('simbolo');
//Arrays
const g = [1, 2, 3];
const h = ['1', '2'];
const i = ['1', 2, 3];
let person1 = {
    firstName: "John", lastName: "Sheridan", age: 52, varon: true
};
let person2 = {
    firstName: "Michael", lastName: "Garibaldi", age: 53
};
let a1 = {};
a1 = {
    valor: 5,
    funcion: function multiplica(x) { return typeof (x) === "number"; }
};
//Any
let food = "pizza";
//Tuplas
const authors = ["Frank", 46];
//Enums
var Food;
(function (Food) {
    Food[Food["Pizza"] = 0] = "Pizza";
    Food[Food["FriedChicken"] = 1] = "FriedChicken";
    Food[Food["IceCream"] = 2] = "IceCream";
})(Food || (Food = {}));
;
let myFavoriteFood;
//Funciones
let myMathFunction;
function add(n1, n2) {
    return "" + n1 + n2;
}
myMathFunction = add;
function multiply(a, b) {
    return a * b;
}
myMathFunction = multiply;
//arrow functions y parametros por defecto
const multNums = (a, b = 10) => a * b;
//Objetos
let person;
person = { firstName: "John", lastName: "Sheridan", age: 52 };
//null, void y undefined (tiene que estar desactivado strict y strictNullChecks)
//let myFavoriteNumber: number = undefined;
//let myFavoriteString: string = null;
//Spreads, templated text
const addNums = (...a) => a.reduce((acc, val) => acc + val);
const nums = [5, 6];
alert(addNums(...nums));
const addNums1 = (m, ...a) => {
    console.log(`Hola ${m}`);
    return a.reduce((acc, val) => acc + val);
};
alert(addNums1('eugenio', 5, 6, 7, 8));
//Desestructurar
const persona = {
    firstName: "Billy", lastName: "Joel", age: 70
};
const { firstName, lastName, age } = persona;
alert(`${firstName} ${lastName} tiene ${age} años`);
const vals = ["Billy", "Joel", 70];
const [first, last, edad] = vals;
alert(`${first} ${last} tiene ${edad} años`);
