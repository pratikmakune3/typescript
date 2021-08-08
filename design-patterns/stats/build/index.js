"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import fs from "fs";
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
// Load data - using Node standard lib
// Let's convert this logic into a reusable class CsvFileReader
/* const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf8",
  })
  // Parse data
  .split("\n")
  .map((row: string): string[] => row.split(",")); */
// Instantiate MatchReader --extends--> abstract class CsvFileReader
// const reader = new MatchReader("football.csv");
// reader.read();
//Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an object of MatchReader and pass in something that satisfy 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// Analyse
var manUnitedWins = 0;
/* Approach 1
const homeWin = "H";
const awayWin = "A";
const draw = "D"; */
/* Approach 2 - But obj as mentioned bellow has many usage in JS
const MatchResult = {
  HomeWin: "H",
  AwayWin: "A",
  Draw: "D",
}; */
/*
  Approach 3 - best approach, use enum - enumeration, like an object with closely related vals
  why enum - to signalling other engg, this is the collection of v. closely related vals
  creating enum also creates, a type in app, and this type can be used somewhere else, may be return type of func
  Check - MatchResult.ts
*/
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    /*
      Issue 1 - magic string comparisons.
      Hardocded 'H' and 'A' is bad for other Engg.
  
      sol 1 - put comments, but we know the drawbacks
      sol 2 - put const representing values 'H', 'A', 'D'
    */
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// Report
console.log("Man United won " + manUnitedWins + " games");
