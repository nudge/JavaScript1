// 1. Write a function named `giveCompliment`
//
// - It takes 1 argument: your name
// - Inside the function create an array with 10 strings. Each string should be a compliment, like `"great"`, `"awesome"`
// - Write logic that randomly selects a compliment
// - Return a string: "You are [COMPLIMENT], [YOUR_NAME]!


function giveCompliment(name){
  const compliments = ["great", "awesome", "the king", "the master", "the man", "something", "the one", "handsome", "beautiful", "the jerk"];
  return `You are ${compliments[Math.floor(Math.random() * compliments.length)]}, ${name}`;
}
