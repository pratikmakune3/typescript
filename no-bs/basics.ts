let username: string = "pratik";
let hasLoggedIn: boolean = true;

username += " makune";

console.log(username);

// Specifying the types

// Typing number
let myNumber: number = 10;

// Typing Regex
let myRegex: RegExp = /foo/;

// Typing array
const names: string[] = username.split(" ");

// Typing array - Another way to define Array type - using generic
const myValues: Array<number> = [1, 2, 3];

// Typing objects
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "pratik",
  last: "makune",
};

// Typing maps - using Utility Type, Record<keyType, valType>
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

// Conditionals and expressions
// Doesn't work - if(ids["d"] === '30'){}
if (ids[30] === "d") {
}

// Loops
// No need to specify type if typescript is inferring it correctly...
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) => `${v * 10}`);
