"use strict";
{
  let arrShopcart = ["bananas", "milk"];
  let groceryItems = ["apples", "celery", "coconut", "oranges"];

  function addItem(item) {
    if (arrShopcart.length < 3) {
      arrShopcart.push(item);
    } else if (arrShopcart.length >= 3) {
      arrShopcart.push(item);
      arrShopcart.shift();
    }
    console.log(arrShopcart);
    return arrShopcart;
  }

  addItem(groceryItems[0]);
  addItem(groceryItems[1]);
  addItem(groceryItems[2]);
}
