"use strict"

const numChildren = [0,1,2,3,4]
const partnerNames = ['Brad Pitt','Channing Tatum','Bradley Cooper','Hugh Jackman','Ryan Gosling'];
const locations = ['Italy','Brazil','Japan','Canada','Argentina'];
const jobs = ['Web Developer','Chef de Cuisine','Circus Clown','Lawyer','Designer'];

function getElement(elementArray) {
    const randomthing = Math.floor(Math.random() * elementArray.length);
    return elementArray[randomthing];
}

console.log(`You will be a ${getElement(jobs)} in ${getElement(locations)}, and married to ${getElement(partnerNames)} with ${getElement(numChildren)} kids.`)
console.log("-----------------")
console.log(`You will be a ${getElement(jobs)} in ${getElement(locations)}, and married to ${getElement(partnerNames)} with ${getElement(numChildren)} kids.`)
console.log("-----------------")
console.log(`You will be a ${getElement(jobs)} in ${getElement(locations)}, and married to ${getElement(partnerNames)} with ${getElement(numChildren)} kids.`)
