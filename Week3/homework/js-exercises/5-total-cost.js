{
    'use strict';

    /*
        Write a function called calculateTotalPrice
    It takes 1 argument: an object that contains properties that only contain number values
    Add all the number values together
    Return a number: the total price of all items
    Create an object named cartForParty with 5 properties. Each property should be a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)
    Call the function 1 time, giving it the object cartForParty as an argument
     */

    function calculateTotalPrice(shoppingcart) {

        for (const key in shoppingcart) {

            totalPrice = totalPrice + shoppingcart[key];
        }

        console.log(totalPrice);

        return totalPrice;
    }

    let totalPrice = 0;
    
    const cartForParty = {
        beer: 1.75,
        chips: 0.99,
        popCorn: 1.25,
        chocolate: 4,
        cola: 1.5,
    };

    calculateTotalPrice(cartForParty);


}