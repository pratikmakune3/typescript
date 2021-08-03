import faker from "faker";
import { Mappable } from "./CustomMap";

// File naming convention - capital U in User.ts
// represents, exportable class

// In general, a seperate file houses the class and you export the class.
// and deal with it inside differnet file... generally you don't deal with it in the same file

// export convention in TS - don't use default export, it's a community convention

/* 
  implements - we tell TS, help us... help User classs satisfy Mappable interface
  hence, TS will enforce User class to have all the properies/methods implemented inside it.
*/
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

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
