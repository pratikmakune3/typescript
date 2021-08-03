// import { User } from "./User";
// import { Company } from "./Company";

/* 
  Instruction to every other class
  on how they can be an argument to 'addMarker'
*/
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  // ref variable which has a ref to google map
  // Making it private in order to not have it's access, outside of CustomMap class
  // that could potentially decrease the surface area of google map apis to other devs from other files
  private googleMap: google.maps.Map;

  // By taking in divId -> increase the re-usability
  constructor(divId: string) {
    // @ts-ignore
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Remember - we annotate function in TS by annotating it's args and return type

  /* 
    Approach 3 - best of all the approaches
    Inverting the dependency by creating interface Mappable
    and making Mappable as a gatekeeper to enter into addMarker method

    Now, everytime you add new class e.g. CarLot, Park, you need to add location{lat, lng} and markerContent()
    extensible code... by creating interface 
  */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  /* 
    Approach 2 -
    mappable: User | Company -> mappable has the intersection of User & Company properties
    only location will be available in mappable type
    but it's not v. scalable - imagine we have many other classes like Park, CarLot
    and we want to addMarker for all those, we'll need to import them all and add inside the or | condition in the type bellow. 
    Hence CustomMap has a direct dependency on all these classes. Tight coupling
    So, the better approach would be to invert the dependency. IoC
    it should be User, Company, CarLot, Park 's responsibility, not CustomMap's
  */
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  /*
    Approach 1 - bad(code duplication...)
    Writing seperate methods for both User and Company
    addUserMarker(user: User)
    addCompanyMarker(company: Company)
  */
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
}
