'use strict'

function calculateTotalPrice(receipt) {
    let totalPrice = 0;
    for (const propt in receipt) {
        totalPrice += receipt[propt];
    }
    return totalPrice;
};
const cartForParty = {
    beers: 1.75,
    chips: 0.99,
    water: 1,
    crackers: 2,
    peanuts: 1.2
};
console.log(calculateTotalPrice(cartForParty));