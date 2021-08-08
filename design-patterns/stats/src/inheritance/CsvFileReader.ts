import fs from "fs";
// import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// tuple
// type MatchData = [Date, string, string, number, number, MatchResult, string];

/* 
  Goal - is to make CsvFileReader reusable
  making abstract mapRow, marking abstract class CsvFileReader 
  making it generic class, type reusability
*/
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  /* 
    Making abstract method, inheriting classes has to implement it
    Reusability
  */
  abstract mapRow(row: string[]): T;
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

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf8",
      })
      // Parse data
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}

// const csvFileReader = new CsvFileReader("football.csv");
// csvFileReader.read();
