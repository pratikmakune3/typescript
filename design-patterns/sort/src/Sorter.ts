// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

/*  
  using abstract - provide re-usable implementation of some method to child classes
                    but prevent the instance creation
*/
export abstract class Sorter {
  /* 
    defining abstract methods - as this.compare/this.swap is needed to perform sorting inside sort method
      and class Sorter can't provide these implementations, else this.compare/this.swap throws an err,
      also this way we enforce child classes to provide the compare, swap, length implementations...
  */
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
    console.log(this);
  }
}
