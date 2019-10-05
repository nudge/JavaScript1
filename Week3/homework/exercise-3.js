'use string';
// Exercise 3: Be your own fortune teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune.
// It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
// Randomly select values from the arrays.
// Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
// Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random values that make sense
// Call the function 1 time, by passing the arrays as the argument.

//i need a function that selects random number so i've declared it.
function randomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

//then, i've declared another function as it is ordered in the instructions.
//I have initialized variables by giving the parameters defined in this function as arguments to the previous function.
function tellFortune(nC, pN, loc, jT) {
  let randomChildNmr = randomElement(nC);
  let randomPartner = randomElement(pN);
  let randomLoc = randomElement(loc);
  let randomJob = randomElement(jT);
  return `You will be a ${randomJob} in ${randomLoc}, and married with ${randomPartner} with ${randomChildNmr} kids.`;
}

let numChildren = [1, 2, 3, 4, 5];
let partnerNames = ['Adriana', 'Johanna', 'Paulina', 'Messi', 'Ronaldo'];
let locations = ['Amsterdam', 'Hilversum', 'Amesfoort', 'Nijmegen', 'Zutphen'];
let jobs = ['doctor', 'dentist', 'worker', 'web - developer', 'conductor'];

console.log(tellFortune(numChildren, partnerNames, locations, jobs));
