// readonly - locks up the mutation, set only once, then locked

class Doggy {
  // DAO Class pattern - easy to write right inside the constructor...
  constructor(public readonly name: string, public readonly age: number) {}
}

const lg = new Doggy("LG", 10);
console.log([lg.name, lg.age]);
// lg.name = "new LG"; // Badd, let's make it readonly

// static and singleton

// Let's make DogList a singleton - only single canonical object in the whole app
class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    // this.doggies.push(dog);
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog({ name: "woofie", age: 20 });
console.log(DogList.instance.getDogs());
