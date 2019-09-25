'use strict';

const drinkTypes = ['cola', 'lemonade', 'water'];

let drinkTray = [];

for( let i=0;i<5;i++) {
        drinkTray.push(drinkTypes[i%drinkTypes.length]);
    
    }
    console.log("Hey guys, I brought a " + drinkTray + ".");