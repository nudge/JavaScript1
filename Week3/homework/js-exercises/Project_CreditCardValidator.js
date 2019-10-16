'use strict'

function validNumber(num) {
    
    const sumDigits = str => { //This function sums the digits of the credit card number in the string. Below I used an if statement to make sure that sum of the digits is greater than 16.
        let sum = 0;
        for (let char of str) {
          sum += +char;
        }
        return sum
      };

    //   function allSameDigits(str) {
    //     return /^(\d)\1+$/.test(str.replace(/[^\d]/g,'')); //I used a regex function to check whether all digits are same. Is that okay to use a regex (I kind of feel like cheating)? 
    // }

    function allEqual(creditCard) {
        return new Set(creditCard).size;
      }


    if (creditCard.toString().length !== 16) { //This if statement makes sure that there are 16 digits in the credit card number.
        return 'Error: Your need to have a 16 digit number.'
    } else if (isNaN(creditCard)) { //This checks whether credit card number consists of digits. If you use a character other than a digit, it becomes 'Not a Number'.
        return 'Error: Your credit card number should consist of digits.'
    } else if (creditCard % 2 === 1) { //Checks the last digit with the remainder operator to make sure that it is even.
        return 'Error: Your final digit must be even.'
    } else if (sumDigits(creditCard) < 16) {
        return 'Error: Sum of your digits should be greater than 16.'
    } else if (allEqual(creditCard) == 1) {
        return 'Error: Your card number should have at least two different digits.'
    } else {
        return 'Correct! You can enter your security code.'
    } 

}

const creditCard = '4444444444444444';

console.log(validNumber(creditCard));
