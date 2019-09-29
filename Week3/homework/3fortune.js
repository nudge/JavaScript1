// Why pay a fortune teller when you can just program your fortune yourself?
//
// 1. Write a function named `tellFortune`.
//
// - It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
// - Randomly select values from the arrays.
// - Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
// 2. Create 4 arrays, `numChildren`, `partnerNames`, `locations` and `jobs`. Give each array 5 random values that make sense

function random(array){
  return Math.floor(Math.random() * array.length);
}

const children = [1, 4, 15, 0, 2];
const partners = ["Monica", "Jenny", "Ola", "Emma", "Candy"];
const locations = ["Paris", "Amsterdam", "Moscow", "Hawaii", "Jungle"];
const jobs = ["Developer", "Hired Gun", "Pokemon Trainer", "Teacher", "Explorer"];

function tellFortune(children, partners, locations, jobs){
  return `You will be a ${jobs[random(jobs)]} in ${locations[random(locations)]}, and married to ${partners[random(partners)]} with ${children[random(children)]} kids.`
}

// 3. Call the function 1 time, by passing the arrays as the argument.
let fortune = tellFortune(children, partners, locations, jobs);
console.log(fortune);
