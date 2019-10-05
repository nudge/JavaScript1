"use strict"

let numChildren = [0,1,2,3,4]
let partnerNames = ['Brad Pitt','Channing Tatum','Bradley Cooper','Hugh Jackman','Ryan Gosling'];
let locations = ['Italy','Brazil','Japan','Canada','Argentina'];
let jobs = ['Web Developer','Chef de Cuisine','Circus Clown','Lawyer','Designer'];

function getElement(elementArray) {
    let randomthing = Math.floor(Math.random() * elementArray.length);
    return elementArray[randomthing];
}

console.log(`You will be a ${getElement(jobs)} in ${getElement(locations)}, and married to ${getElement(partnerNames)} with ${getElement(numChildren)} kids.`)
console.log("-----------------")
console.log(`You will be a ${getElement(jobs)} in ${getElement(locations)}, and married to ${getElement(partnerNames)} with ${getElement(numChildren)} kids.`)
console.log("-----------------")
console.log(`You will be a ${getElement(jobs)} in ${getElement(locations)}, and married to ${getElement(partnerNames)} with ${getElement(numChildren)} kids.`)