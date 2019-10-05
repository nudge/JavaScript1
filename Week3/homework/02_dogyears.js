/*You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge.
It takes 1 argument: your puppy's age (number).
Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
Call the function three times with different sets of values.*/

function calculateDogAge(puppyAge) {
  return "Your doggie is " + puppyAge * 7 + " years old in dog years!";
}

console.log(calculateDogAge(4));
console.log(calculateDogAge(9));
console.log(calculateDogAge(11));
