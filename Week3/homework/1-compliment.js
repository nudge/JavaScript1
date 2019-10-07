'use strict'

 function givecomplements (name){

    const compliments=["great", "awesome","trusty","respectful", "friendly", "clever", "Generous", "brilliant", "handsome", "beautiful"];

   return `You are ${compliments[Math.floor(Math.random() * compliments.length)]}, ${name}`+"!";
}

console.log(givecomplements("Muhammad"));
console.log(givecomplements("Muhammad"));
console.log(givecomplements("Muhammad"));
