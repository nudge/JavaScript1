"use strict";
let groceryItemArray = ["Milk", "Banana"];

function addToShoppingCart(item){
   if(groceryItemArray.length > 2)
     {groceryItemArray.shift();}
   groceryItemArray.push(item);
}


addToShoppingCart("Soy Milk");
console.log(groceryItemArray);

addToShoppingCart("Olive oil");
console.log(groceryItemArray);

addToShoppingCart("Hummus");
console.log(groceryItemArray);

addToShoppingCart("Chickpeas");
console.log(groceryItemArray);









