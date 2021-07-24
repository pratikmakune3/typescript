// Typing parameters and return
function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// Default value
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// Union types
export const format = (title: string, param: string | number) =>
  `${title} ${param}`;

// Void functions
export const printFormat = (title: string, param: string | number): void => {
  console.log(`${title} ${param}`);
};

// Promise functions
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// Rest parameters
function introduce(salutaion: string, ...names: string[]): string {
  return `${salutaion} ${names.join(" ")}`;
}
