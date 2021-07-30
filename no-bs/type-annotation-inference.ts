/* 
  
  Type Inference - TS tries to figure out what type of value a var refers to
    - Implicit automated (rely on TS)

    const color = "red"

    if var declaration and initialization are on the same line, typescript will figure out the type of var like above

    but,
    
    let color;     // Type Inference doesn't work here, the type becomes :any
    color = "red"
    color = 5      // Possible!!! because the type inference is :any

    Rely on Type inference as much as possible.

  Type Annotation - tiny bits of code we add to tell TS, what type of value a var will refer to
      - Explicit manual

    When to use - 
    1. When we declare the variable on one line and initialize later 
    2. When the type can't be inferred by TS
    3. When function returns any type and we need to clarify the value


*/

// Type Annotation

// Classes
class Car {}

// : Car -> tells the instance of Class
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Type Inference, declaration and initialization are on the same line...
let color = "red";

// Type Inference doesn't kick in...
let fname; // :any
fname = "pratik";
fname = 10;

// When to use type annotations -

// 1. When we declare the variable on one line and initialize later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

console.log(foundWord);

// 2. When the type can't be inferred by TS
let numbers = [-1, -9, 11];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// 3. When function returns any type and we need to clarify the value
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // inferred type :any, hence type annotation is better
// console.log(coordinates.skdskmd); // not allowed

// --------------------------------------

// Functions

// rule of thumb - always use explict type annotations on function args and return type
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logMessage = (message: string): void => {
  console.log(message);
};

// never - function never returns anything... at some point of time, it throws err
const throwErr = (message: string): never => {
  throw new Error(message);
};

// Object

const profile = {
  firstname: "Pratik",
  age: 28,
  coords: {
    lat: 10,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring...
const { age, firstname }: { age: number; firstname: string } = profile;
const {
  coords: { lat, lng },
}: {
  coords: { lat: number; lng: number };
} = profile;
