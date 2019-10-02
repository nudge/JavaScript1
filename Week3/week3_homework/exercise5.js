'use strict';

const cartForParty = {
  item_1: 0.99,
  item_2: 3.5,
  item_3: 10.3,
  item_4: 1.75,
  item_5: 33.46,
};

function calculateTotalPrice(items_obj) {
  let total_price = 0;

  for (const item in items_obj) {
    total_price += items_obj[item];
  }
  return total_price;
}
calculateTotalPrice(cartForParty);
