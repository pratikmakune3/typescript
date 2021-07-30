/* 
  NOTE - 

  what is type? - 
  "red" -
  1. it's a string
  2. it's a value that has all the properties + methods that string has
      e.g - chatAt(), includes(), concat() etc...

  Why do we care?
    - types are used by TS compiler to analyse code for errs
    - allow other engineers to understand what values are flowing around in codebase
    - autocomplete documentation on those types
*/

const today = new Date();
today.getMonth();

const person = {
  age: 30,
};
// person.ajbdjbj // not allowed

class Color {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const col = new Color("blue");
col.name;
// col.ahjdja // not allowed

/* 
  Where do we use types?
    short ans - Everywhere :)
*/
