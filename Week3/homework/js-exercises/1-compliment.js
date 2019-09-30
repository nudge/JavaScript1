"use strict";

function giveCompliment(name){
    let complimentArr = ["cool", "nice", "super", "awesome", "clever", "smart", "funny", "great", "thoughtful", "generous"];
    let randomNumber = Math.floor(Math.random() * complimentArr.length);
    return "You are " + complimentArr[randomNumber] + " " +  name;
}

console.log(giveCompliment("Sila"));
console.log(giveCompliment("Sila"));
console.log(giveCompliment("Sila"));