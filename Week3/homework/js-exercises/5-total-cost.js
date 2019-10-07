"use strict";
function calculateTotalPrice(productsObject){
    let sum=0;
      for(let product in productObject ){
        sum += productsObject[product];}
      return sum;
}
const cartForParty = { haydari:10, acuka:8, raki:25, chips:5, cola:5, salgam:10, ice:2};

console.log(calculateTotalPrice(cartForParty));

