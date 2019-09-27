/*In this project you'll write a script that calculates grades, based on the American grading system! Let's say a student did a test and they got a 60 out of 100, this script will:

convert the score into a percentage
calculate what grade corresponds with that percentage, and
shows in the command line the result: the grade and the percentage
When writing the script, make use of the following grade scores:

Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%)
These are the requirements your project needs to fulfill:

Make a JavaScript file with a name that describes its contents
Use either a switch or if/else statement
Write at least 2 comments that explain to others what a line of code is meant to do
Make the return value of the function a template string, so you can insert variables!
Use node from the command line to test if your code works as expected
This is what the script is expected to return in the command line:

You got a B (85%)!*/
"use strict";

let gradeAmerica = "";

let score = "";

function gradeCalculator(score) {
  if (90 <= score && score <= 100) {
    gradeAmerica = "A";
  } else if (80 <= score && score <= 89) {
    gradeAmerica = "B";
  } else if (70 <= score && score <= 79) {
    gradeAmerica = "C";
  } else if (60 <= score && score <= 69) {
    gradeAmerica = "D";
  } else if (50 <= score && score <= 59) {
    gradeAmerica = "E";
  } else if (0 <= score && score <= 49) {
    gradeAmerica = "F";
  }

  console.log("You got a " + gradeAmerica + " (" + score + "%)!");
}
// Here write the number to convert to get your american equivalent

gradeCalculator(64);
