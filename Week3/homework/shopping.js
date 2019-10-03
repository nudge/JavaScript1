'use strict';
{
    function addToShoppingCart(add) {
        if (listOfItem.length > 2) {
            listOfItem.shift();
        }
        listOfItem.push(add);
        return "You bought " + listOfItem;
    }
    let listOfItem = ["bananas", "milk"];
    console.log(addToShoppingCart("meat"));
    console.log(addToShoppingCart("chicken"));
    console.log(addToShoppingCart("bread"))
}