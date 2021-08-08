"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// tuple
// type MatchData = [Date, string, string, number, number, MatchResult, string];
/*
  Goal - is to make CsvFileReader reusable
  making abstract mapRow, marking abstract class CsvFileReader
  making it generic class, type reusability
*/
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    // {
    //   return [
    //     dateStringToDate(row[0]),
    //     row[1],
    //     row[2],
    //     parseInt(row[3]),
    //     parseInt(row[4]),
    //     row[5] as MatchResult, // type assertion/casting, 'H' / 'A' / 'D'
    //     row[6],
    //   ];
    // }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: "utf8",
        })
            // Parse data
            .split("\n")
            .map(function (row) { return row.split(","); })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
// const csvFileReader = new CsvFileReader("football.csv");
// csvFileReader.read();
