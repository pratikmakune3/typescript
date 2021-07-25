// Function overloading...

interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinates(obj: Coordinate): Coordinate;
function parseCoordinates(x: number, y: number): Coordinate;
function parseCoordinates(str: string): Coordinate;

function parseCoordinates(arg1: unknown, arg2?: unknown) {
  if (typeof arg1 === "object") return { ...arg1 };
  else if (typeof arg1 === "number" && typeof arg2 === "number")
    return { x: arg1, y: arg2 };
  else return `{ ${arg1} }`;
}

console.log(parseCoordinates("x:10,y:20"));
