{
    'use strict';

    // Credit Card Validator

    // number must be 16 digits

    function checkLength(cardNumber) {
        let cardNumberString = cardNumber.toString();
        return cardNumberString.length === 16;
    };

    // should contain only numbers
    function checkOnlyNumbers(cardNumber) {
        return isNaN(cardNumber) === false

    };

    // must have at least two different digits represented (all of the digits cannot be the same)
    function checkNotSame(cardNumber) {
        for (var i = 0; i < cardNumber.length; i++) {
            if (cardNumber[0] != cardNumber[i])
                return true; // returns true if all digits are not same, because we want the numbers be different.
        }
        return false; //returns false if digits are same, because the number is invalid.
    };

    // the final digit must be even
    function isNumberEven(cardNumber) {
        return cardNumber % 2 === 0;
    }

    // The sum of all the digits must be greater than 16
    function sumAllDigits(cardNumber) {
        let sum = 0;
        for (const num of cardNumber) {
            sum += num;
        }
        if (sum >= 16) {
            return true;
        } else {
            return false
        }
    }

    console.log("checkLength");
    console.log(checkLength('1234567876543210'));
    console.log("--------");

    console.log("checkOnlyNumbers");
    console.log(checkOnlyNumbers('1234567876543210'));
    console.log("--------");

    console.log("checkNotSame");
    console.log(checkNotSame('1234567876543210'));
    console.log("--------");

    console.log("isNumberEven");
    console.log(isNumberEven('1234567876543210'));
    console.log("--------");

    console.log("sumAllDigits");
    console.log(sumAllDigits('1234567876543210'));
    console.log("--------");


    function creditCardValidator(cardNumber) {
        if (checkLength(cardNumber)) {
            if (checkOnlyNumbers(cardNumber)) {
                if (checkNotSame(cardNumber)) {
                    if (isNumberEven(cardNumber)) {
                        if (sumAllDigits(cardNumber)) {
                            return `Card number ${cardNumber} is VALID`;
                        }
                    }
                }
            }
        } else {
            return `Card number ${cardNumber} is INVALID`;
        }
    }

    console.log(creditCardValidator('1234567876543210'));

}