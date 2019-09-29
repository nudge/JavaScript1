// **Exercise 2: Dog years**
//
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// 1. Write a function named `calculateDogAge`.
//
// - It takes 1 argument: your puppy's age (number).
// - Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"

function calculateDogAge(year){
  return `Your doggie is ${year * 7} years old in dog years!`;
}

// 2. Call the function three times with different sets of values.

console.log(calculateDogAge(5));
console.log(calculateDogAge(51));
console.log(calculateDogAge(3));
