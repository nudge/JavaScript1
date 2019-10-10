/*Let's do some grocery shopping! We're going to get some things to cook dinner with. However, you like to spend your money and always buy too many things. So when you have more than 3 items in your shopping cart the first item gets taken out.

Write a function named addToShoppingCart.
It takes in 1 argument: a grocery item (string)
Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
Create an array with 2 predefined strings: "bananas" and "milk"
Call the function 3 times, each time with a different string as the argument.*/

const groceryItems = ["bananas", "milk "];

function addToShoppingCart(item) {
  groceryItems.push(item);

  if (groceryItems.length > 3) {
    groceryItems.shift();
  }
}
addToShoppingCart("beer");
console.log("You bought " + groceryItems);

addToShoppingCart("bacon");
console.log("You bought " + groceryItems);

addToShoppingCart("potato chips");
console.log("You bought " + groceryItems);

addToShoppingCart("orange juice");
console.log("You bought " + groceryItems);
