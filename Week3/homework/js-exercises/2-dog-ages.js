"use strict";

function calculateDogAge(humanYears){
if (humanYears > 0 ){
const dogYears = humanYears * 7;
return "Your doggie is " +dogYears+ " years old in dog years!"
}else return "Your dog's age must be a positive value";
}

console.log(calculateDogAge(5));
console.log(calculateDogAge(10));
console.log(calculateDogAge(3));
console.log(calculateDogAge(-3));