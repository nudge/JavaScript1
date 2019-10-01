'use strict';
const calculateTotalPrice = (object) => {
    let sum = null;

    for (const k in object) {
        
        sum += object[k];
    }
    return sum;
};
const cartForParty = {
    juice: 1.25,
    chips: 2.25,
    cola: 1,
    water: 0.9,
    chhocolateBar: 1.75
};
console.log(calculateTotalPrice(cartForParty));