// Function Parameter - () => void
export function printToFile(text: string, callback: (v: number) => void): void {
  console.log(text);
  callback(10);
}

// Typing function, instead of writing directly inside the code, improves readability
// export because you can use this type somewhere else
export type MutationFunction = (v: number) => number;

export function mutateArray(
  nums: number[],
  mutate: MutationFunction
): number[] {
  return nums.map(mutate);
}

const myMutation: MutationFunction = (num) => 2 * num;

console.log(mutateArray([1, 2, 3], (num) => num * 10));

// Returning Function -
type AdderFunction = (num: number) => number;

export const createAdder = (v: number): AdderFunction => {
  return (num: number) => {
    return num + v;
  };
};

const addOne = createAdder(1);

console.log(addOne(55));
