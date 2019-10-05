{
    'use strict';

    //Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.

    function calculateDogAge(puppyAge) {

        let dogAge = puppyAge * 7;

        return console.log("Your doggie is " + dogAge + " years old in dog years!");

    }

    calculateDogAge(4);
    calculateDogAge(2);
    calculateDogAge(7);

}