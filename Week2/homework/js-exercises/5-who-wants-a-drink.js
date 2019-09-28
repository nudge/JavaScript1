{
    'use strict';

    const drinkTypes = ['cola', 'lemonade', 'water'];
    let drinkTray = [];

    for (let i = 0; i < 5; i++) {
        if (i < drinkTypes.length) {
          drinkTray.push(drinkTypes[i])
        
        } else {
          drinkTray.push(drinkTypes[i - drinkTypes.length])
        
        }
      }
      console.log("Hey guys, I brought a " + drinkTray.join(', ') + "!");
}