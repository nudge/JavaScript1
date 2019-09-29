{
    'use strict';

    const drinkTypes = ['cola', 'lemonade', 'water'];
    let drinkTray = [];

    for (let i = 0; i < drinkTypes.length; ++i) {
      let currentDrinkType = drinkTypes[i];
      let drinkCount = 0;

      do {
        // check that there are not more than 2 of a drinkType already in drinkTray
        // if true, then push
        for (let drink of drinkTray) {
          if (drink === currentDrinkType) {
            drinkCount++;
          };
        }
        if (drinkCount < 2) {
          drinkTray.push(currentDrinkType);
        }
      } while (drinkCount < 2 && drinkTray.length < 5);
    }

console.log("Hey guys, I brought a " + drinkTray.join(', ') + "!");
}