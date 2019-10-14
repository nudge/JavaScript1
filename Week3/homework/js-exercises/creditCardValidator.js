'use strict';

{
  // In this project you'll write a script
  // that validates whether or not a credit card number is valid.
  // Here are the rules for a valid number:
  function checkCard(cardNumber) {

    // Number must be 16 digits
    if (cardNumber.length !== 16) {
      console.log(`Card must be 16 digits!`);
      return false;
    }

    // All of them must be numbers
    // Check whether the number with Number()
    if (!Number(cardNumber)) {
      console.log(`Must be numbers all of them!`)
      return false;
    }

    // You must have at least two different digits represented
    // (all of the digits cannot be the same)
    // Convert to array from number
    const cardNumberArr = Array.from(String(cardNumber), Number);
    // If all the digits are same, its length must be 1 
    if ([... new Set(cardNumberArr)].length === 1) {
      console.log(`It must have at least two different digits!`)
      return false;
    }

    // The final digit must be even
    // Divide the whoe card number by 2
    if (cardNumber % 2 !== 0) {
      console.log(`Odd final number!`);
      return false;
    }

    // Sum each elemans of the array with reduce method
    const sum = cardNumberArr.reduce((acc, cur) => acc + cur);
    if (sum <= 16) {
      console.log(`Sum less than 16!`);
      return false;
    }

    // valid card
    console.log(`Credit card is valid!`);
    return true;
  }

  console.log(checkCard('645666379266664'));
  console.log(checkCard('92356419601511q6'));
  console.log(checkCard('4444444444444444'));
  console.log(checkCard('1111111111111110'));
  console.log(checkCard('6666666666666661'));
  console.log(checkCard('6666666666666664'));
}