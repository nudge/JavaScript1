'use strict';
// Exercise 2: Dog years

// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge.
// It takes 1 argument: your puppy's age (number).
// Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
// Call the function three times with different sets of values.
function calculateDogAge(puppysAge) {
  let calculatedAge = puppysAge * 7;
  return `Your doggie is ${calculatedAge} years old in dog years!`;
}

console.log(calculateDogAge(2));
console.log(calculateDogAge(3));
console.log(calculateDogAge(1));
