'use strict'
let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

// for (let i=0; i < 5; i++) {
//     if (i<3) {
//         drinkTray.push(drinkTypes[i])
//     } else if (i<4) {
//         drinkTray.push(drinkTypes[i-3])
//     } else {
//         drinkTray.push(drinkTypes[i-3])
//     } 
// }

for (let i=0; i < 5; i++) {
    drinkTray.push(drinkTypes[i % drinkTypes.length]);
    console.log([i % drinkTypes.length]);
}

console.log('Hey guys, I brought a ' + drinkTray + '!')
