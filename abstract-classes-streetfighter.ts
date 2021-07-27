// StreetFighter template -
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.specialAttack()}`);
  }

  // Overriding class needs to provide specialAttack impl.
  abstract specialAttack(): string;

  abstract get name(): string;
}

// const ryu = new StreetFighter(); // abstract class can't be instantiated!

class Ryu extends StreetFighter {
  specialAttack(): string {
    return "Hadoken";
  }

  get name() {
    return "Ryu";
  }
}

class ChunLi extends StreetFighter {
  specialAttack(): string {
    return "Lighting Kick";
  }

  get name() {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
console.log(ryu.specialAttack());
ryu.fight();
console.log(ryu.name);

const chunli = new ChunLi();
chunli.fight();
