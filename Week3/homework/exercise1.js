"use strict"

const myCompliments = ['gentle','nice','awesome','terrific','friendly', 
'amazing','kind','generous','joyful','funny'];

const name = ['Aline']
function getElement(elementArray) {
    const randomcompliment = Math.floor(Math.random() * elementArray.length);
    return elementArray[randomcompliment];
}

console.log(`You are so ${getElement(myCompliments)}, ${name}!`) 
console.log(`You are so ${getElement(myCompliments)}, ${name}!`)
console.log(`You are so ${getElement(myCompliments)}, ${name}!`)


