import faker from "faker";

// File naming convention - capital U in User.ts
// represents, exportable class

// In general, a seperate file houses the class and you export the class.
// and deal with it inside differnet file... generally you don't deal with it in the same file

// export convention in TS - don't use default export, it's a community convention

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
