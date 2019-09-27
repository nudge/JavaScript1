'use strict';
// convert the score into a percentage
// calculate what grade corresponds with that percentage, and
// shows in the command line the result: the grade and the percentage
// When writing the script, make use of the following grade scores:

// Grade A (90% - 100%)
// Grade B (80% - 89%)
// Grade C (70% - 79%)
// Grade D (60% - 69%)
// Grade E (50% - 59%)
// Grade F (0% - 49%)
// These are the requirements your project needs to fulfill:

// Make a JavaScript file with a name that describes its contents
// Use either a switch or if/else statement
// Write at least 2 comments that explain to others what a line of code is meant to do
// Make the return value of the function a template string, so you can insert variables!
// Use node from the comma

// function calculateTheGrade() {
//   let gradeCalculator = ''
//   if (totalPoint >= 90  )
// }

// First we should form a function named calculateTheGrade and assign a parameter named point.
// Then we should initialize a 'grade' variable which has no element. And finally form a conditional statement through 'if' and 'else'
function calculateTheGrade(point) {
  let grade = '';
  if (point < 0 || point > 100) {
    return 'Scores must be between 0 and 100';
  } else {
    if (point < 50) {
      grade = 'F';
    } else if (point < 60) {
      grade = 'E';
    } else if (point < 70) {
      grade = 'D';
    } else if (point < 80) {
      grade = 'C';
    } else if (point < 90) {
      grade = 'B';
    } else if (point <= 100) {
      grade = 'A';
    }
    return `You got a ${grade} (${point}%)!`;
  }
}

console.log(calculateTheGrade(-65));
