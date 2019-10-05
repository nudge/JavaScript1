 'use strict'

let creditCardNumber = prompt("Enter your credit card number");

// The main function.
function creditCardValidator(creditCardNumber) {

//This function sums the digits of the credit card number.
 let sum_of_digits = 0;
 function sum_of_digits_Validator(creditCardNumber) {
  for (const digits of creditCardNumber) {
    sum_of_digits += digits;
  }
  return sum_of_digits >= 16 ? true : false;
 }
	
//This function checks whether all digits are same.	
  function allAreNumbersValidator (creditCardNumber) {
   return  /^[0-9]+$/.test(creditCardNumber) ? true : false;
 }
	/* This function checks whether the count of digits is more than 16 .    and makes sure that all of them are numbers and the last digit is      even ,it calles also the previous functions. 
	*/
	
    if (creditCardNumber.toString().length > 16 || creditCardNumber.toString().length < 16) { //This if statement checks  the credit card number whether all.
        return 'Invalid number:Your credit card namber must be at least 16 digit.'
    } else if (isNaN(creditCardNumber)) {
        return 'Invalid number:Your credit card number should consist of numbers only.'
    } else if (creditCardNumber.toString()[15] % 2 === 1) { 
        return 'Invalid number:The final digit must be even.'
    } else if (sum_of_digits_Validator(creditCardNumber)===false) {
        return 'Invalid number:The sum of all the digits must be greater than 16.'
    } else if (allAreNumbersValidator(creditCardNumber) === false) {
        return 'Invalid number:Your card number should have at least two different digits.'
    } else {
        return 'Your credit card number:'+creditCardNumber+' Successfully validated.'
    } 

}
console.log(creditCardValidator(creditCardNumber));