// Create a blueprint for what a Vehcle should be like...

class Vehicle {
  constructor(public color: string) {}

  // private drive(): void {
  //   console.log("droom droom");
  // }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("red");
console.log(vehicle.color);

// Inheritance -
// extending to class, essentially copies all the methods of Vehicle into Bike, not literally though!
class Bike extends Vehicle {
  constructor(public wheels: number, color: string) {
    super("blue");
  }

  // you can override the method of parent class by providing your own implementation...

  // private modifier - we don't want other developers to call private methods
  private drive(): void {
    console.log("vroommmm");
  }

  startDrivingProcess(): void {
    this.drive();

    // honk is accessible as it's protected
    this.honk();
  }
}

const bike = new Bike(2, "orange");
bike.startDrivingProcess();
console.log(bike.color);
