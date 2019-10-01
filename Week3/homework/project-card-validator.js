// Checks the lenght of the string, returns true if it is 16.
function checkLength(item){
  return item.length === 16;
}

// Checks if the string consists of only digits.
function checkAllDigit(item){
  return +item == item;
}

// Checks if all the chars are same.
function checkAllSame(item){
  return item % 1111111111111111 === 0;
}

// Checks if the card number ends with an even number.
function checkEven(item) {
  return item % 2 === 0;
}

// Checks if the sum of all digits are more then 16.
function checkSum(item){
  return item.split('').map(function(a){
    return +a
  }).reduce(function(a, b){
    return a + b;
  }) > 16;
}

// It runs the functions above in a specific order to check if the card is valid.
function validateCard(card){
  if (checkLength(card)) {
    if (checkAllDigit(card)) {
      if (!checkAllSame(card)) {
        if (checkEven(card)) {
          if (checkSum(card)) {
            return `${card} is VALID!`;
          }
        }
      }
    }
  }
  return `${card} is NOT valid!`;
}

console.log(validateCard("9999777788880000"));
console.log(validateCard("6666666666661666"));
console.log(validateCard("a92332119c011112"));
console.log(validateCard("4444444444444444"));
console.log(validateCard("1111111111111110"));
console.log(validateCard("6666666666666661"));
