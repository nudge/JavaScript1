"use strict";
// Empty array declaration
let drinkTray = [];

// 3 drink types
const drinkTypes = ["cola", "lemonade", "water"];

/* I know this is not the way I was supposed to follow. It gives the desired result but I should have created a conditional and then
push.I did a lot of research on it, I tried to use .filter to see the number of occurences but I didn't get it fully so
I decided not to use it until I learn it better.*/

for(let i = 0; i < 5; i++){
   drinkTray.push(drinkTypes[i % 3]) 
}
console.log(drinkTray);
console.log("Hey guys I brought a " + drinkTray + "!");

