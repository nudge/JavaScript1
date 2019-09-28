{
    'use strict';

    const drinkTypes = ['cola', 'lemonade', 'water'];
    let drinkTray = [];

    for (let i = 0; i < 5; ++i) {

        if (i < drinkTypes.length) {

          drinkTray.push(drinkTypes[i]);
        
        } else {

          drinkTray.push(drinkTypes[i - drinkTypes.length]);
        
        }
        /*
        right now it shows the result that we want, but it's not the correct way. 
        we need a smarter logic to check drink types's quantity and change the behavior.
        */ 
      }
      console.log("Hey guys, I brought a " + drinkTray.join(', ') + "!");
}