class SorterBad {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Type guard - treats this.collection inside if statement
        // as Array and make all the methods of array avail.

        if (this.collection instanceof Array) {
          // TS activates all the Array methods inside this if block
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        if (typeof this.collection === "string") {
          // TS activates all the string methods inside this if block
          this.collection.split("");
        }
      }
    }
    console.log(this.collection);
  }
}

const sorterBad = new SorterBad([10, 5, -3, 0]);
sorter.sort();
