'use strict';
{
    //We create a function which define carnumber is valid or invalid.
    function validateCard (digits) {
        let numbers = digits.split('');
        let lastNumber = numbers[numbers.length - 1];
        let addNumbers = numbers.reduce(function(total, num){
            return Number(total) + Number(num);
        });
        if (digits.toString().length !== 16) {
            console.log('Number must be 16 digits, all of them must be numbers');
        } else if (Number.isInteger(Number(digits)) === false){
            console.log('All of the characters must be digits')
        } else if (lastNumber % 2 === 1) {
            console.log('The final digit must be even')
        } else if (addNumbers < 16) {
            console.log('The sum of all the digits must be greater than 16');
        } else {
            console.log(`The following credit card numbers are valid: ${digits}`)
        }

        return;
    }
    //Now we can check all of codes whether it works or not.
    console.log(validateCard('888888'));//false
    console.log(validateCard('8888888884888882'));//true
    console.log(validateCard('1100111111111111'));//false
    console.log(validateCard('8888888aaa888888'));//false
}