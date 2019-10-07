"use strict";

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = [ "A", "B", "C", "D", "E"];
const locations = ["Istanbul", "Amsterdam", "Paris","Diyarbakir", "Tokyo"];
const jobs = ["waiter", "doctor", "lawyer", "painter", "singer"];
const randomNumber = Math.floor(Math.random() * 5);

function tellFortune(){
  return "You will be a " + jobs[randomNumber] + " in " + locations[randomNumber] + ", and married to " +partnerNames[randomNumber] + " with " + numChildren[randomNumber] + " kids."
}

console.log(tellFortune());
