import addNumbers, { addStrings } from "./functions";

console.log(addNumbers(1, 2));
// Doesn't work - console.log(addNumbers(1, "pratik"));
// Doesn't work - console.log(addNumbers(1));

console.log(addStrings("pratik", "makune"));

// Due to default value in addStrings, this works now -
console.log(addStrings("okdokey"));
