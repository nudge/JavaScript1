'use strict'
function tellFortune(numberChildren, namePartner, location, job) {
    let randomJob = jobs[Math.floor((Math.random()*jobs.length))];
    let randomLoc = locations[Math.floor((Math.random()*locations.length))];
    let randomPartner = partnerNames[Math.floor((Math.random()*partnerNames.length))];
    let randomNum = numChildren[Math.floor((Math.random()*numChildren.length))];

    return 'You will be a ' + randomJob + ' in ' + randomLoc + ',' + ' and married to ' + randomPartner + ' with ' + randomNum + ' kids.'
}

let numChildren = [1, 2, 3, 4, 5];
let partnerNames = ['Jenny', 'Sally', 'Mary', 'Hanna', 'Jennifer'];
let locations = ['Amsterdam', 'Boston', 'London', 'Berlin', 'Rome'];
let jobs = ['programmer', 'consultant', 'professor', 'marketing coordinator', 'chef'];

console.log(tellFortune(numChildren, partnerNames, locations, jobs));