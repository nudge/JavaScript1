'use strict'
function calculateTotalPrice(number) {
    return Object.values(cartForParty).reduce((total, items) => total + items);
    
}

const cartForParty = {
    drinks: 100, 
    chips: 50,
    cups: 15,
    snacks: 75,
    cookies: 50
}


console.log('The total price of all items is ' + calculateTotalPrice(cartForParty) + ' Euros.');