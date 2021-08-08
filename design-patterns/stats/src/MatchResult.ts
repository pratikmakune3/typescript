/* 
  Approach 3 - best approach, use enum - enumeration, like an object with closely related vals
  why enum - to signalling other engg, this is the collection of v. closely related vals
  creating enum also creates, a type in app, and this type can be used somewhere else, may be return type of func  
*/
export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
