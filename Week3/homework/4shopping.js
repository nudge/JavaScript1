// **Exercise 4: Shopping at the supermarket**
//
// Let's do some grocery shopping! We're going to get some things to cook dinner with. However, you like to spend your money and always buy too many things. So when you have more than 3 items in your shopping cart the first item gets taken out.
//
// 1. Write a function named `addToShoppingCart`.
//
// - It takes in 1 argument: a grocery item (string)
// - Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
// - Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
//
// 2. Create an array with 2 predefined strings: `"bananas"` and `"milk"`
// 3. Call the function 3 times, each time with a different string as the argument.

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(item){
  if (shoppingCart.length > 2) {
    shoppingCart.shift();
  }
  shoppingCart.push(item);
}

console.log(shoppingCart);
addToShoppingCart("Tomato");
console.log(shoppingCart);
addToShoppingCart("Potato");
console.log(shoppingCart);
addToShoppingCart("Carrot");
console.log(shoppingCart);
