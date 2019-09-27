'use strict';
// Exercise 5: Who wants a drink?

// You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.

// Declare a variable that holds an empty array, called drinkTray.
// There are 3 different types of drinks:

// const drinkTypes = ['cola', 'lemonade', 'water'];
// Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
// If there are already two instances of a drinkType then start with the next drink in the array.
// Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
// Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")

const drinkTypes = ['cola', 'lemonade', 'water'];
let drinkTray = [];

// for (i = 0; i < 5; i++) {
//   drinkTray.push(drinkTypes[i % drinkTypes.length]);
// }
// console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);

//                       or

let randomNumber = function() {
  return Math.round(Math.random() * 2);
};

for (let i = 0; i < 5; i++) {
  while (true) {
    let myRandomNumber = randomNumber();
    let drink = drinkTypes[myRandomNumber];
    let count = 0;
    for (let j = 0; j < drinkTray.length; j++) {
      if (drinkTray[j] === drink) {
        count++;
      }
    }
    if (count < 2) {
      drinkTray.push(drink);
      break;
    }
  }
}

console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);
// by this way drinkTray always gives random array which includes max 2 same type of drinks
