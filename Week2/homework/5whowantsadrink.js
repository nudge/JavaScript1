// You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
//
// Declare a variable that holds an empty array, called drinkTray.
const drinkTray = [];
// There are 3 different types of drinks:
const drinkTypes = ['cola', 'lemonade', 'water'];
// Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable.
// However, if there are already two instances of a drinkType then start with the next drink in the array.
// Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
for(let i = 0; i < 5; i++){
  drinkTray.push(drinkTypes[i % drinkTypes.length]);
}
// Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, lemonade, cola, water, lemonade!")
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);
