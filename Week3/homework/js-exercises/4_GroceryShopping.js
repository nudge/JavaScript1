'use strict'

    
function addToShoppingCart(groceryItem) {
    
    if (cart.length > 2) {
        cart.push(groceryItem);
        cart.shift();
    } else {
        cart.push(groceryItem);
    }

    return 'You bought ' + cart + '!'
}


let cart = ['bananas', 'milk'];

let product1 = addToShoppingCart('bread');
console.log(product1);
let product2 = addToShoppingCart('peppers');
console.log(product2);
let product3 = addToShoppingCart('eggs');
console.log(product3);




