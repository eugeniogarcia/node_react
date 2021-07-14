function sayHi(humanName: string) {
  alert(`Hello, ${humanName}!`);
}
sayHi("Luke Skywalker ");

//string
const bestShowEver: string = "Babylon 5";
//number
const a: number = 42;
const b: number = 3.14;
const c: number = 0xf00d;
const d: number = 0o744; // Zero followed by lower-case o
//boolean
const isThisTheBestBookEver: boolean = true;
//bigint; Solo si la versión de javascript es superior a E2020
const e: bigint = 42n;
//simbolos
const f: Symbol=Symbol('simbolo');
//Arrays
const g: number[]=[1,2,3]
const h: string[] = ['1', '2']
const i: (string | number)[] = ['1', 2, 3]

//Tipos, y Tipos con generics (generics se puede usar no solo en tipos)
type PersonType = {
  firstName: string, lastName: string, readonly age: number, varon?:boolean
};
let person1: PersonType = {
  firstName: "John", lastName: "Sheridan", age: 52, varon:true
};
let person2: PersonType = {
  firstName: "Michael", lastName: "Garibaldi", age: 53
};

//No se puede porque es read-only
//person2.age+=1;


type miTipo<T>={
  valor:T,
  funcion:(x:T)=>boolean
}

let a1:miTipo<number>={} as miTipo<number>;

a1={
  valor:5,
  funcion:function multiplica(x:number){return typeof(x)==="number";}
}

//Any
let food: any = "pizza";

//Tuplas
const authors: [string, number] = ["Frank", 46];

//Enums
enum Food { Pizza, FriedChicken, IceCream };
let myFavoriteFood: Food.FriedChicken;

//Funciones
let myMathFunction: (num1: number, num2: number) => string|number;

function add(n1: number, n2: number): string {
  return "" + n1 + n2;
}

myMathFunction = add;

function multiply(a: number, b: number): number {
  return a * b;
}
myMathFunction = multiply;

//arrow functions y parametros por defecto
const multNums = (a: number, b: number = 10): number => a * b;

//Objetos

let person: {firstName: string, lastName: string, age: number} 

person = {firstName: "John", lastName: "Sheridan", age: 52};

//null, void y undefined (tiene que estar desactivado strict y strictNullChecks)
//let myFavoriteNumber: number = undefined;
//let myFavoriteString: string = null;


//Spreads, templated text
const addNums = (...a: number[]): number => a.reduce((acc, val) => acc + val);
const nums: number[] = [5, 6];
alert(addNums(...nums));

const addNums1 = (m:string, ...a: number[]): number => {
  console.log(`Hola ${m}`); 
  return a.reduce((acc, val) => acc + val);
}

alert(addNums1('eugenio',5,6,7,8));

//Desestructurar
const persona = {
  firstName: "Billy", lastName: "Joel", age: 70
};
const { firstName, lastName, age } = persona;

console.log(`${firstName} ${lastName} tiene ${age} años`);

const vals = ["Billy", "Joel", 70];
const [first, last, edad] = vals;
console.log(`${first} ${last} tiene ${edad} años`);

//Clases
class Planet {
  //propiedad estática
  public static theBorgLiveHere: boolean = true;
  protected name: string;
  protected mass: number;

  //getters y setters
  get nombre(){
    return this.name;
  }
  get peso() {
    return this.mass;
  }
  set peso(val:number){
    this.mass=val;
  }
  //constructor
  constructor(nombre:string,val:number = 1) {
    this.name = nombre;
    this.mass = val;
  }

  //miembro publico
  public printName() {
    alert(this.name);
  }
}

//Herencia
class Jupiter extends Planet {
  private colorBands: boolean = true;
  constructor() {
    super("Jupiter", 1234);
  }
}

let j: Jupiter = new Jupiter();
alert(Planet.theBorgLiveHere); // true

//Clase abstracta
abstract class BasePlanet {
  name: string;
  radius: number;

  constructor(inName: string, inRadius: number) {
    this.name = inName;
    this.radius = inRadius;
  }
  
  //Método abstracto
  abstract collapseToBlackHole(inMoreMass: number): void;
  
  calcDiameter() {
    return this.radius * 2;
  }
}

class Earth extends BasePlanet {
  collapseToBlackHole(inAdditionalMass: number) {
    // Perform physics-breaking 2001-like monolith magic here
  }
}

//interfaces
interface IPerson {
  firstName: string;
  hairColor?: string;
  getGreeting(lastName: string): string;
};

function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}
function greetLouder(person: IPerson) {
  alert(`HELLO, ${person.firstName}!!!!`);
}

let p:IPerson;
p = { firstName: "Frank", hairColor: "Black" } as IPerson
greet(p);

interface INinja extends IPerson {
  numberOfSwords: number;
}
let ninja = {} as INinja;

ninja.firstName = "Ryuki";
ninja.numberOfSwords = 2;
