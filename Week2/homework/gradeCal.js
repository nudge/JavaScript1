 'use strict'
 const prompt = require('prompt');
 prompt.start();
// I installed npm prompt module to take score from user..
// I wrote a callback function for converting the score to grade
 function getGrade(score) {
    let grade;
    if (0 <= score && score <= 49) {
        grade = 'F';
    } else if (score <= 59) {
        grade = 'E';
    } else if (score <= 69) {
        grade = 'D';
    } else if (score <= 79) {
        grade = 'C';
    } else if (score <= 89) {
        grade = 'B';
    } else if (score <= 100) {
        grade = 'A';
    } 
    return grade;
}
 console.log("Enter your score :");
 const score = prompt.get(['score'], function (err, result) {
   const myGrade= getGrade(result.score); // calling getGrade function with score and assigning it to myGrade
   console.log("You got a " + myGrade + " (" + result.score + "%)");
 });
