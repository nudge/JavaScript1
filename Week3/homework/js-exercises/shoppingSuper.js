'use strict';

{
  // Exercise 4: Shopping at the supermarket

  // Write a function named addToShoppingCart.
  // It takes in 1 argument: a grocery item (string)
  const addToShoppingCart = groceryItem => {

    // Add grocery item to array.
    groceryList.push(groceryItem);

    // If the amount of items is more than 3 remove the first one in the array
    if (groceryList.length > 3) {
      groceryList.shift();
    }

    // Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
    return `You bought ${groceryList}!`;
  }

  // Create an array with 2 predefined strings: "bananas" and "milk"
  const groceryList = ['bananas', 'milk'];

  // Call the function 3 times, each time with a different string as the argument.

  console.log(addToShoppingCart('bread'));
  console.log(addToShoppingCart('fish'));
  console.log(addToShoppingCart('cola'));
  console.log(addToShoppingCart('juice'));
}