"use strict";

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = [ "A", "B", "C", "D", "E"];
const locations = ["Istanbul", "Amsterdam", "Paris","Diyarbakir", "Tokyo"];
const jobs = ["waiter", "doctor", "lawyer", "painter", "singer"];
const randomNumber = Math.floor(Math.random() * 5);
function randomElement(array){
 return array[Math.floor(Math.random() * array.length)];
}

function tellFortune(job, city, partner, kids){
  return "You will be a " + randomElement(jobs) + " in " + randomElement(locations) + ", and married to " + randomElement(partnerNames) + " with " + randomElement(numChildren) + " kids."
}

console.log(tellFortune(jobs, locations, partnerNames, numChildren));
