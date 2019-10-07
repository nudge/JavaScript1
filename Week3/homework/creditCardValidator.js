  'use strict'


// The main function.
function creditCardValidator(creditCardNumber) {

//This function sums the digits of the credit card number.
 let sum_of_digits = 0;
 function sum_of_digits_Validator(creditCardNumber) {
  for (const digits of creditCardNumber) {
    sum_of_digits += +digits;
  }
  return sum_of_digits;
 }
 //This function checks whether there is at least two different digits(all of the digits cannot be the same)
	
 function allSameDigitsValidator(creditCardNumber) {
        return /^(\d)\1+$/.test(creditCardNumber.replace(/[^\d]/g,'')); 
    }
	
	
	/* This function checks whether the count of digits is more than 16 .    and makes sure that all of them are numbers and the last digit is      even ,it calles also the previous functions. 
	*/

    if (creditCardNumber.toString().length > 16 || creditCardNumber.toString().length < 16) { //This if statement checks  the credit card number whether all.
        return 'Invalid number:Your credit card namber must be at least 16 digit.'
    }  else if (isNaN(creditCardNumber)) {
        return 'Invalid number:Your credit card number should consist of numbers only.'
    } else if (creditCardNumber.toString()[15] % 2 !== 0) { 
        return 'Invalid number:The final digit must be even.'
    } else if (sum_of_digits_Validator(creditCardNumber) < 16) {
        return 'Invalid number:The sum of all the digits must be greater than 16.'
    } else if (allSameDigitsValidator(creditCardNumber) === true) {
        return 'Invalid number:Your card number should have at least two different digits.'
    } else {
        return 'Your credit card number:'+creditCardNumber+' Successfully validated.'
    } 

}
//Valid numbers
console.log(creditCardValidator('9999777788880000'));
console.log(creditCardValidator('6666666666661666'));
//Invalid numbers
console.log(creditCardValidator('a92332119c011112'));
console.log(creditCardValidator('4444444444444444'));
console.log(creditCardValidator('1111111111111110'));
console.log(creditCardValidator('6666666666666661'));
