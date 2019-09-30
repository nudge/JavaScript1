"use strict";

function tellFortune(numChildren, partnerNames, locations, jobs){
  numChildren = [1, 2, 3, 4, 5];
  partnerNames = [ "A", "B", "C", "D", "E"];
  locations = ["Istanbul", "Amsterdam", "Paris","Diyarbakir", "Tokyo"];
  jobs = ["waiter", "doctor", "lawyer", "painter", "singer"];
  let randomNumber = Math.floor(Math.random() * 5);

  return "You will be a " + jobs[randomNumber] + " in " + locations[randomNumber] + ", and married to " +partnerNames[randomNumber] + " with " + numChildren[randomNumber] + " kids."
}

console.log(tellFortune());