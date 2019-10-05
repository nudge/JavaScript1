'use strict';
// In this project you'll write a script that validates whether or not a credit card number is valid.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
// 9999777788880000
// 6666666666661666
// The following credit card numbers are invalid:

// a92332119c011112 (invalid characters)
// 4444444444444444 (only one type of number)
// 1111111111111110 (sum less than 16)
// 6666666666666661 (odd final number)
// These are the requirements your project needs to fulfill:

// Make a JavaScript file with a name that describes its contents
// Create a function with a descriptive name, for example: doSomething or calcAnotherThing
// Write at least 2 comments that explain to others what a line of code is meant to do
// Make the return value of the function a template string, so you can insert variables!
// Use node from the command line to test if your code works as expected
// Good luck!

const entries = {
  valid: 'Valid entry',
  invalid: 'Invalid entry',
};
// Number must be 16 digits, all of them must be numbers
const checkCharAmount = function(creditCardNum) {
  if (creditCardNum.length === 16) {
    return entries.valid;
  }
  return entries.invalid;
};

//all of them must be numbers (Indeed, the checkEven and checkSum funcs satisfy the order, nevertheless i have coded for it)
const checkChars = function(creditCardNum) {
  if (isNaN(creditCardNum)) {
    return entries.invalid;
  }
  return entries.valid;
};

//The final digit must be even
const checkEven = function(creditCardNum) {
  if (creditCardNum % 2 === 0) {
    return entries.valid;
  }
  return entries.invalid;
};

//The sum of all the digits must be greater than 16
const checkSum = function(creditCardNum) {
  let sum = 0;
  for (let i = 0; i < creditCardNum.length; i++) {
    sum += Number(creditCardNum[i]);
  }
  if (sum > 16) {
    return entries.valid;
  }
  return entries.invalid;
};

// At least two different digits must have been represented  (all of the digits cannot be the same)
const checkSameDigits = function(creditCardNum) {
  let count = 0;
  creditCardNum = creditCardNum.toString();
  for (let i = 0; i < creditCardNum.length - 1; i++) {
    if (creditCardNum[i] === creditCardNum[i + 1]) {
      count++;
    }
  }
  if (count === 15) {
    return entries.invalid;
  } else {
    return entries.valid;
  }
};

// Function expression
let validateTheNumber = function(
  cardNumber,
  charAmountCallback,
  charsCallback,
  evenCallback,
  sumCallback,
  sameDigitsCallback,
) {
  if (charAmountCallback(cardNumber) === entries.invalid) {
    return entries.invalid;
  }

  if (charsCallback(cardNumber) === entries.invalid) {
    return entries.invalid;
  }

  if (evenCallback(cardNumber) === entries.invalid) {
    return entries.invalid;
  }

  if (sumCallback(cardNumber) === entries.invalid) {
    return entries.invalid;
  }

  if (sameDigitsCallback(cardNumber) === entries.invalid) {
    return entries.invalid;
  }

  return entries.valid;
};
//Function call
console.log(
  validateTheNumber(
    '6666666666666661',
    checkCharAmount,
    checkChars,
    checkEven,
    checkSum,
    checkSameDigits,
  ),
);
