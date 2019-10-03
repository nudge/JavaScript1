
"use strict";

function cardValidator(creditCardNumber){
    let msg = "";
    const cardNumStr = creditCardNumber.toString();
    let sum = 0;
    for(let i = 0; i < cardNumStr.length; i++){
       sum += parseInt(cardNumStr[i]);
    }
    function allTheSame(cardNumStr) {
        return cardNumStr.split('').every(char => char === cardNumStr[0]);
    }
    if(cardNumStr.length !== 16 ){
        msg = "Invalid number of digits!"
        console.log(msg);
        return false;
    } else if(Number.isInteger(Number(creditCardNumber)) !== true){
        msg = "What you typed is not even a proper number!"
        console.log(msg);
        return false;
    } else if(parseInt(cardNumStr[cardNumStr.length - 1]) % 2 !== 0){
        msg = "Your credit number must end with an even number!"
        console.log(msg);
        return false;
    } else if( sum <= 16) {
        msg = "The sum of the numbers you logged must be greater than 16 :( "
        console.log(msg);
        return false;

    } else if(allTheSame(creditCardNumber) === true){
        msg = "All digits cannot be the same!"
        console.log(msg);
        return false;

    } else{
        msg = "It is a valid credit card number! You see, it is not that difficult. Congratulations:)"        
        console.log(msg);
        return true;
    }

}

console.log(cardValidator("2222222222222222")); // false
console.log(cardValidator("2222222229052222")); // true
console.log(cardValidator("1000000000000000")); // false
console.log(cardValidator("2222222222222221")); // false
console.log(cardValidator("2222222222222a22")); // false
console.log(cardValidator("2172227390428222")); // true
console.log(cardValidator("172649072027493038")); // false