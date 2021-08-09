class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Type inference - TS is intelligent to figure out the T: string | number
// It's recommended to add generic type explicitly, to catch errs
const a = new ArrayOfAnything(["a", "b", "c", 1]);

// Recommended ->
const b = new ArrayOfAnything<string>(["a", "b", "c"]);
b.get(1);

// Generic constraints ->
class Human {
  print(): void {
    console.log("I am a human");
  }
}

class Horse {
  print(): void {
    console.log("I am a horse");
  }
}

interface Printable {
  print(): void;
}

// Putting a constraint on T, it has to be of type Printable
// It makes sure, that print() method exists in the args
function printHumanOrHorse<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    // arr elem must have print() method
    arr[i].print();
  }
}

printHumanOrHorse([1, 2, 3]); // This throws an err, as number is not Printable type
// Recommended to annotate generic type like bellow ->
printHumanOrHorse<Horse>([new Horse(), new Horse()]); // This works
printHumanOrHorse<Human>([new Human(), new Human()]); // This works
