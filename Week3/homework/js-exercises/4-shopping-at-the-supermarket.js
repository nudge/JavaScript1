{
    'use strict';

/*
Write a function named addToShoppingCart.
It takes in 1 argument: a grocery item (string)
Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
Create an array with 2 predefined strings: "bananas" and "milk"
Call the function 3 times, each time with a different string as the argument.
*/

function addToShoppingCart(groceryItem) {
    
    if (shooppingCart.length < 3 ) {
        shooppingCart.push(groceryItem);
        
    } else {
        shooppingCart.shift();
        shooppingCart.push(groceryItem);

    }
    
    const endOfShopping = ("You bought " + shooppingCart.join(', '));
     
    console.log(endOfShopping);

    return endOfShopping;
    
}

let shooppingCart = ["bananas","milk"];

addToShoppingCart("Onion");

addToShoppingCart("Ginger");

addToShoppingCart("Tomato")



}