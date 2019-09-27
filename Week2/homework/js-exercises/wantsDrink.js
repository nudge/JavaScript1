'use strict';

{
  const drinkTray = [];
  const drinkTypes = ['cola', 'lemonade', 'water'];
  for (let drink = 0; drink < 5; ++drink) {
    if (drink < 2) {
      drinkTray.push(drinkTypes[0]);
    } else if (drink < 4) {
      drinkTray.push(drinkTypes[1]);
    } else {
      drinkTray.push(drinkTypes[2]);
    }
  }
  // console.log(drinkTray);
  // console.log(`${drinkTray}`);

  // Firstly, I convert the data structure to string from array.
  // Then, I give a space after commas.
  console.log(`Hey guys, I brought a ${drinkTray.toString().replace(/,/g, ', ')}!`);
}