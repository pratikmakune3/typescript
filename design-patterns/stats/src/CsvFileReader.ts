import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf8",
      })
      // Parse data
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}

const csvFileReader = new CsvFileReader("football.csv");
csvFileReader.read();
