"use strict"
/*the grocery list should contain bananas and milk at first and then we should be adding other items*/
const groceryItem = ["bananas", "milk"];
/*the grocery list should have no more than 3 items, so each time I add another item, the first thing in the cart needs to be taken out*/
function addToShoppingCart (item){
    const moreItems = groceryItem.push(item); /*here we push the new item into the array*/
    if (groceryItem.length > 3){
        groceryItem.shift(); /*and here we take the first item out since the length is already = 3*/

    }
    return `You bought ${groceryItem}!`
}

/*ta daaaaaaa, every new item in the end of the array puts the first item off!!!!*/
console.log(addToShoppingCart("salt"))
console.log(addToShoppingCart("coffee"))
console.log(addToShoppingCart("peanuts"))