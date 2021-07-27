// Immutability...

interface Cat {
  name: string;
  breed: string;
}

// Readonly<Type> utility type
type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  };
}
const c = makeCat("usul", "tabby");
// This isn't good - mutable cat
// c.name = "meowie";

function makeImmutableCat(name: string, breed: string): ReadonlyCat {
  return {
    name,
    breed,
  };
}
const ic = makeImmutableCat("jojo", "persian");
// ic.name = "yoyo"; // not allowed

// Let's create readonly tuple
interface Coordinate {
  x: number;
  y: number;
  z: number;
}

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
//c1[0] = 50; // Bad may be!!!

// Let's make a really const array
const reallyConst = [1, 2, 3] as const;
