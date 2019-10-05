/*Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune.
It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
Randomly select values from the arrays.
Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random values that make sense
Call the function 1 time, by passing the arrays as the argument.*/

"use strict";

const numChildren = [2, 3, 6, 4, 8];
const partnerNames = ["Michelle", "Rita", "Maggie", "Eleonor", "Vera"];
const locations = [
  "Amsterdam",
  "Szcezcin",
  "Liverpool",
  "Budapest",
  "Chang Mai"
];
const jobs = ["clown", "musician", "chef", "programmer", "dancer"];
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function tellFortune(numOfchild, name, location, job) {
  return (
    "You will be a " +
    getRandom(jobs) +
    " in " +
    getRandom(locations) +
    ", and married to " +
    getRandom(partnerNames) +
    " with " +
    getRandom(numChildren) +
    " kids."
  );
}
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
