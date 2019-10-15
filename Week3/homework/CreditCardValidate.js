"use strict"

function validCreditCard (num) {
    let cardNumber = num.split("");
         /*First rule: the number needs to have length of 16*/
        if (cardNumber.length !== 16) {
            return `The card ${num} is invalid. It has ${cardNumber.length} digits and it needs to have 16 digits.`
        };

        /*Second rule: the number must be composed just with numbers*/
    for (let i = 0;i < num.length;i++){
        let numberOnly = num.replace(/[^0-9]/g,'');
        if (num !== numberOnly){
            return `The card ${num} contain invalid digits. It must have only numbers.`
        }
    };
        /* Third rule: the sum of all digits must be more than 16 */
    let sum = 0;   
    for (let i = 0; i < cardNumber.length;i++){
        sum += parseFloat(cardNumber[i]); 
    }if (sum < 16){
            return `The sum of the digits of the card ${num} is less than 16!`
        }; 
        /*Fourth rule: digits can't be all the same.
        The logic I tried to use here is like multiplication table: if all my digits are 8, then the total sum of it is something like 8*16.
        If I divide my sum for my array length and the result is the same as any one of my digits, then it means the digits are all the same.
        But that doesn't work with ===, that's why I used ==. Hope is correct!
        */
        if (sum / cardNumber.length == cardNumber[1]){
            return `This card number ${num} is invalid. Digits can't be all the same.`
        };
         /*Fifth rule: last digit must be even*/
        if (num[15] % 2 === 1){
            return `Your card number needs to end with an even digit.`
        }; 
        return `Your card ${num} is approved!`
        
}
   
let num = ('4529859203987562');
console.log(validCreditCard(num))

