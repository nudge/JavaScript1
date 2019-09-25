'use strict'
const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
for (let i = 0; i < 5; i++) {
    while (true) {
        const randomItem = drinkTypes[Math.floor(Math.random() * drinkTypes.length)]; 
        // Getting a random item from drinkTypes array
        // When I filter the array with the randomItem and check its length I can learn how many times I have that randomItem
        // If the randomItem was pushed less than 2 I can push it again and break the while loop 
        // after every 'break' my for loop iterates for the next i value
        // if cond is not true than go through again while loop and get another randomItem
        if (drinkTray.filter(item => {
                return item === randomItem
            }).length < 2) {
            drinkTray.push(randomItem);
            break;
        }
    }
}
console.log(drinkTray);