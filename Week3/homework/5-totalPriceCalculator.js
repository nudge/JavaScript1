 'use strict'
  
  const cartForParty = {
    drinks: 90, 
    chips: 80,
    cake: 4,
    cookies: 70,
	Nuts: 60
  }

 
  function calculateTotalPrice(price) {
    let sum = 0;
    for (let key in price) {
      sum += price[key];
    }
    return sum;
  }
  
  console.log(calculateTotalPrice(cartForParty));