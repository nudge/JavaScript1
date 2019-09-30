'use strict'
const groceryItems = ["bananas", "milk"];

function addToShoppingCart(item) {
    groceryItems.push(item);
    if (groceryItems.length > 3) {
        groceryItems.shift()
    }
    return "You bought " + groceryItems.join(" ") + "!";
};
console.log(addToShoppingCart("chocolate"));
console.log(addToShoppingCart("kiwi"));
console.log(addToShoppingCart("apple"));