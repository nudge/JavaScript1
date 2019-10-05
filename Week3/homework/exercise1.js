
"use strict"

let myCompliments = ['gentle','nice','awesome','terrific','friendly', 
'amazing','kind','generous','joyful','funny'];
/*The exercise asks to put the array with the compliments inside 
the function but when I try to do that, doesn't work.*/
let name = ['Aline']
function getElement(elementArray) {
    let randomcompliment = Math.floor(Math.random() * elementArray.length);
    return elementArray[randomcompliment];
}
/* It was kinda working but the same happened with the exercises from last week: 
the random kept showing always the same position of the index.My mistake was on the math.floor (), because
I was closing it right after math.random and it should be closing just after elementArray.length. */
console.log(`You are so ${getElement(myCompliments)}, ${name}!`) 
console.log(`You are so ${getElement(myCompliments)}, ${name}!`)
console.log(`You are so ${getElement(myCompliments)}, ${name}!`)

