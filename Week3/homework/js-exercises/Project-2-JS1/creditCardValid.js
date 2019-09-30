'use strict'

function cardValidator(cardNum) {
    let result = "";
    const digits = cardNum.split("");
    const lastDigit = digits[digits.length - 1];
    const sumOfDigits = digits.reduce((total, item) => {
        return Number(total) + Number(item)
    });
    if (cardNum.toString().length !== 16 || Number.isInteger(Number(cardNum)) === false) {
        result = `${cardNum} invalid characters or length`;
    } else if (lastDigit % 2 === 1) {
        result = `${cardNum} odd final number`;
    } else if (digits.filter(item => {
            return item === lastDigit
        }).length == digits.length) {
        result = `${cardNum} only one type of number`;
    } else if (sumOfDigits < 16) {
        result = `${cardNum} sum less than 16`;
    } else {
        result = `${cardNum} is a valid card number!`;
    }
    return result;
}
const cardNumber = `6666666666666661`;
console.log(cardValidator(cardNumber));