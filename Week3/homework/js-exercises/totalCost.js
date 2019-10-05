'use strict';

{
  // Exercise 5: Total cost is ...


  // Create an object named cartForParty with 5 properties.
  // Each property should be a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)
  const cartForParty = {
    cola: 2.99,
    water: 0.50,
    chips: 1.49,
    nuts: 2.75,
    corn: 1.99,
  }

  // Write a function called calculateTotalPrice
  // It takes 1 argument: an object that contains properties that only contain number values
  function calculateTotalPrice(objectList) {
    let sum = 0;
    for (let key in objectList) {
      sum += objectList[key];
    }
    return sum;
  }

  // Call the function 1 time, giving it the object cartForParty as an argument
  console.log(calculateTotalPrice(cartForParty));
}