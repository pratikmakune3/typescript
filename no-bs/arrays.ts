const carMakers = ["ford", "toyota"];
const dates = [new Date(), new Date()];

// type annotation - when we're not initializing properly...
let carsByMake: string[][];
const carsByMake1: string[][] = [];

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const flexibleDates: (string | Date)[] = [];
flexibleDates.push("2020-10-10");
flexibleDates.push(new Date());
// flexibleDates.push(100); // not allowed
