"use strict";

let calculateTotalPrice = function(cart) {
  for (const value in cart) {
    sum = sum + cart[value];
  }

  console.log(sum);
};

let sum = 0;
const cartForParty = {
  beers: 10,
  chocolate: 17,
  banana: 5,
  peanuts: 5,
  chips: 8
};

calculateTotalPrice(cartForParty);
