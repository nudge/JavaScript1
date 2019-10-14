'use strict';
{
    // The old assignment which I did

    function calculateTotalPrice (allOfItem) {
        let price = 0;
        for (let item in allOfItem) {
            price = price + allOfItem[item];
        }
        return "The total price of all items " + price;
    }
    let cartForParty = {
        beer: 1.75,
        wine: 3.40,
        cola: 1.80,
        chips: 1.20,
        dessert: 7.90,
    }
    console.log(calculateTotalPrice(cartForParty));

    //There we go in the new assignment

    let cartForParty = {
        beer: 1.75,
        wine: 3.40,
        cola: 1.80,
        chips: 1.20,
        dessert: 7.90,
    };


    function calculateTotalPrice() {
        let getValues = Object.values(cartForParty);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return `The total price of all items ${getValues.reduce(reducer)}`;
    };
    console.log(calculateTotalPrice());
}