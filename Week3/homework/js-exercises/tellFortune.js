'use strict'
const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Andy", "Herman", "Casey", "Severide", "Peter"];
const locations = ["Berlin", "Denver", "Tokyo", "Rio", "Nairobi"];
const jobs = ["full-stack developer", "doctor", "scientist", "farmer", "photographer"];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function tellFortune(numOfChild, name, location, job) {
    return "You will be a " + randomItem(jobs) + " in " + randomItem(locations) +
        ", and married to " + randomItem(partnerNames) + " with " + randomItem(numChildren) + " kids.";
};
console.log(tellFortune(numChildren, partnerNames, locations, jobs));