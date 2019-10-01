'use strict';
function addToShoppingCart(item) {
    // An array with two Items
    var array = ['bananas', 'milk'];

    // Push an item from the prameter
    array.push(item);
    // I check the length of the array if that greater than 1 the number of the array begins from 0
    if (array.length >= 1) {
        // With shift method i can remove the first item from the array
        array.shift()
    }
    return `You bought ${array} !`;

}
console.log(addToShoppingCart('Tomato')); //Output You bought milk,Tomato !
console.log(addToShoppingCart('Water')); //You bought milk,Water ! 
console.log(addToShoppingCart('Orange')); //You bought milk,Orange !