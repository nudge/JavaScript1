"use strict"

function validCreditCard (num) {
    let card = num;
    let cardNumber = card.split("");
    let cardNumberDif = cardNumber.filter((este, i) => cardNumber.indexOf(este) === i);
    let cardNumberLen = cardNumberDif.length;
    let soma = 0;
         /* My intention here is to define that the digits can't be all the same*/
        if (cardNumberLen = 1) {
            return `The card ${card} is invalid!`
        }
        /* Here I wanted to make sure that the sum of all digits are not less than 16 */
        for (let i = 0; i < cardNumber.length; i++){
            soma += cardNumber[i]; 
                if (soma < 16){
                return `The sum of the digits of the card ${card} is less than 16!`
                }
        }
        /* With this two conditions below, cards composed with length different than 16 are rejected */
        if (num.length < 16){
            return `Your card number have ${num.length} digits and it needs to have 16 digits`
        }
        if (num.length > 16){
            return `Your card number have ${num.length} digits and it needs to have 16 digits`
        }
        /*Here we assure that the last digit will be even*/
        for (let x = i=15; num.length === 16; i++){
            if (num[15] === x % 2 == 1){
                return "Your card number needs to end with an even digit"
            }
        }
        /*And if everything is correct, the card is approved. */
        if (NumberIsInterger(cardNumber) === false){
            return `Your credit card ${num} is not valid!`
        }
        else {
            return `Your credit card ${num} is correct and approved!`
        }
     
    }
  
        
let numberOftheCard = ("4985890754630786")
console.log(validCreditCard(numberOftheCard))

