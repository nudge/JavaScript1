"use strict"

function calculateTotalPrice(items) { /* the ideia here is to take all the values from the items and put them all under the var totalPrice */
    let totalPrice = 0;
    for (let price in items) {
        totalPrice += items[price];
    }
    return totalPrice; /*how to format the value so it comes just with numbers after coma?*/
}

let CartForParty = { /* with the objetc here, every key is a product and their values are the price */ 
    beers: 1.99,
    peanuts: 0.79,
    chips: 1.25,
    soda: 2.46,
    cake: 4.78
}

console.log(calculateTotalPrice(CartForParty))
