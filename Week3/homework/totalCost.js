'use strict';
{
    function calculateTotalPrice (allOfItem) {
        let price = 0;
        for (let item in allOfItem) {
            price = price + allOfItem[item];
        }
        return "The total price of all items " + price
    }
    let cartForParty = {
        beer: 1.75,
        wine: 3.40,
        cola: 1.80,
        chips: 1.20,
        dessert: 7.90,
    }
    console.log(calculateTotalPrice(cartForParty));
}