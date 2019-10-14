'use strict'

let drinkTray = [ ];
const drinkTypes = [' cola',' lemonade',' water'];

for (let i = 0; drinkTray.length < 5; i++) {
    while(true){
        let randomDrink = drinkTypes[Math.floor(Math.random())];
        if (drinkTray.filter(drink => {
            return drink === randomDrink
        }).length < 2) {
        drinkTray.push(randomDrink);
        break
        }
   }
}

console.log(`Hey guys, I brought ${drinkTray}!`)
