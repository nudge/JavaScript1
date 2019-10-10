// In this project you'll write a script that validates whether or not a credit card number is valid.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
function checkLength(cardnumber) {
  return cardnumber.length === 16;
}
// You must have at least two different digits represented (all of the digits cannot be the same)
function checkDiff(cardnumber) {
  return new Set(cardnumber.split("")).size > 1;
}

// The final digit must be even
function checkEven(cardnumber) {
  return !!(cardnumber % 2 === 0);
}

// The sum of all the digits must be greater than 16

function checkSum(cardnumber) {
  const array = cardnumber.split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum > 16;
}

console.log(checkSum("27899"));
// The following credit card numbers are valid:

// 9999777788880000
// 6666666666661666

function validateCreditCardNumber(number) {
  if (
    checkLength(number) &&
    checkDiff(number) &&
    checkEven(number) &&
    checkSum(number)
  ) {
    return `${number} is VALID!`;
  } else {
    return `${number} is NOT valid!`;
  }
}

//Number must be 16 digits
console.log(validateCreditCardNumber("12345"));
console.log(validateCreditCardNumber("2763509857463876"));

//all of them must be numbers
console.log(validateCreditCardNumber("a127365908563740"));
console.log(validateCreditCardNumber("2763509857209875"));

//The sum of all the digits must be greater than 16
console.log(validateCreditCardNumber("1111111111111111"));
console.log(validateCreditCardNumber("2763509857209878"));
