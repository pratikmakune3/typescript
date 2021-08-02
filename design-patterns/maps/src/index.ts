import { User } from "./User";
import { Company } from "./Company";

import { CustomMap } from "./CustomMap";

/* 
  Doing this inside index.ts directly, is a problem, 
  now any dev now, has an access to all the methods exposed by google map
  using map variable, and that can potentially break the app.

  Sol - create CustomMap class, hide the google map logic inside Custom Map 
  and only expose the necessary functionality / 
  Facade design pattern / black box design pattern

  The only thing any dev can do with this - create a new map and call addMarker method 

  Hence now it's difficult to break the things...
  
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 1,
  //   center: {
  //     lat: 0,
  //     lng: 0,
  //   },
  // });
 */

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
