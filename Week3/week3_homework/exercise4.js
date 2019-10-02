'use strict';

const groceries = ['bananas', 'milk'];

function addToShoppingCart(item) {
  groceries.push(item);

  if (groceries.length > 3) {
    groceries.shift();
  }
  return `You bought ${groceries}!`;
}

addToShoppingCart('honey');
addToShoppingCart('butter');
addToShoppingCart('bread');
