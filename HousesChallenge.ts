import houses from "./Houses.json";

interface House {
  name: string;
  planet: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

// Function overloading...
function findHouses(houses: string): HouseWithID[];

function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(houses: House[]): HouseWithID[];

function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: Math.random(),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
