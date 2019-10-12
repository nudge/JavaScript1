'use strict';

{
  // Exercise 2: Dog years

  // Write a function named calculateDogAge.
  // It takes 1 argument: your puppy's age (number).
  const calculateDogAge = yourPuppysAge => {

    // Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
    // const instead of let  
    const dogYear = yourPuppysAge * 7;

    //Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
    return `Your doggie is ${dogYear} years old in dog years!`;
  }

  // Call the function three times with different sets of values.
  console.log(calculateDogAge(4));
  console.log(calculateDogAge(7));
  console.log(calculateDogAge(1));
}