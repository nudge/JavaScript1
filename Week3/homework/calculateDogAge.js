'use strict';
function calculateDogAge(puppysAge) {
    const dogYears = 7 * puppysAge;
    return `Your doggie is${dogYears} years old in dog years!`
}
console.log(calculateDogAge(1));
console.log(calculateDogAge(0.5));
console.log(calculateDogAge(2));
