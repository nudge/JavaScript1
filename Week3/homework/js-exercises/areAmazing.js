'use strict';

{
  // Exercise 1: You are amazing, Noer!

  // Write a function named giveCompliment
  // function giveCompliment() { };

  // It takes 1 argument: your name
  // function giveCompliment(yourname) { };

  // Inside the function create an array with 10 strings.
  // Each string should be a compliment, like "great", "awesome"

  // let yourname = '';

  function giveCompliment(yourname) {
    const myArr = ['great', 'awesome', 'corking', 'magnificent', 'brave', 'nice', 'cool', 'fantastic', 'beautiful', 'wonderful'];

    // Write logic that randomly selects a compliment
    let compliment = myArr[Math.floor(Math.random() * myArr.length)];

    // Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
    return `You are ${compliment}, ${yourname}!`;

  }

  // Call the function three times, giving each function call the same argument: your name.
  // console.log(giveCompliment(yourname));
  console.log(giveCompliment('Nuri'));
  console.log(giveCompliment('Nuri'));
  console.log(giveCompliment('Nuri'));



}