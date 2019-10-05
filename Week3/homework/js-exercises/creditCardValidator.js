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
    for (let item = 0; item < cardNumber.length; ++item) {
      let cardNumberItem = cardNumber[item];
      cardNumberItem = Number.parseInt(cardNumberItem);

      if (Number.isInteger(cardNumberItem) !== true) {
        console.log(`Must be numbers all of them!`)
        return false;
      }
    }

    // You must have at least two different digits represented
    // (all of the digits cannot be the same)
    const object = {};
    let index = 0;
    while (index < cardNumber.length) {
      object[cardNumber[index]] = true;
      ++index;
    }
    if (Object.keys(object).length < 2) {
      console.log(`It must have at least two diffrent digits!`)
      return false;
    }



    // The final digit must be even
    if (cardNumber[cardNumber.length - 1] % 2 !== 0) {
      console.log(`Odd final number!`);
      return false;
    }

    // The sum of all the digits must be greater than 16
    let sum = 0;
    let i = 0;
    while (i < cardNumber.length) {
      sum += parseInt(cardNumber[i]);
      ++i;
    }
    if (sum <= 16) {
      console.log(`Sum less than 16!`);
      return false;
    }

    // valid card
    console.log(`Credit card is valid!`);
    return true;
  }

  console.log(checkCard('a92332119c011112'));
  console.log(checkCard('4444444444444444'));
  console.log(checkCard('1111111111111110'));
  console.log(checkCard('6666666666666661'));
  console.log(checkCard('6666666666666664'));
}