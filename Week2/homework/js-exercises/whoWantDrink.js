'use script'; 
{
    let drinkTray = [];
    const drinkTypes = ['cola', 'lemonade', 'water'];
    for (i = 0; i < 5; i++) {
        if (i < 3) {
        drinkTray.push(drinkTypes[i]);
        }
        else if (i < 4) {
        drinkTray.push(drinkTypes[0]);
        }
        else {
        drinkTray.push(drinkTypes[1]);
        }
    }
    console.log("Hey guys, I brought a " + drinkTray + "!");
} 