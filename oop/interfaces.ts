// interface is variable of sorts that refers to - type

// V. Imp for code reusability

// In order to be an Reportable obj, it must have a summary method which returns string!
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} gms of sugar`;
  },
};

// Reportable is a gate keeper to printSummary, in order to enter into printSummary, obj must be of Reportable type :)
const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

// Both oldCivic and drink are v. diff objects in nature
// but they both are of Reportable type, hence the entry to printSummary is allowed

printSummary(oldCivic);
printSummary(drink);
