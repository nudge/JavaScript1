"use strict";

const drinkTypes = ['cola', 'lemonade', 'water'];
let drinkTray = [];


for (let i = 0; i < 5; i++) {
  if (i < drinkTypes.length) {
    drinkTray.push(drinkTypes[i])
  } else {
    drinkTray.push(drinkTypes[i - drinkTypes.length])
  }
}
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);















/*However, if there are already two instances of a drinkType then start with the next drink in the array.
Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, lemonade, cola, water, lemonade!")*/