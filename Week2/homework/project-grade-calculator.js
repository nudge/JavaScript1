
// PROJECT: Grade calculator
//a script that calculates grades, based on the American grading system!

{
    'use strict'

    let result;
    //defined a maximum score. It can be changed according to test.
    let maxScore = 100;

    //turns scores into percentage.
    result = ((result / maxScore) * 100);

    //checking the score's equivalent of usa grades. 
    function gradeCalculator(result) {
        let grade;

        if (result >= 0 && result <= 49) {
            grade = 'F';
        } else if (result >= 50 && result <= 59) {
            grade = 'E';
        } else if (result >= 60 && result <= 69) {
            grade = 'D';
        } else if (result >= 70 && result <= 79) {
            grade = 'C';
        } else if (result >= 80 && result <= 89) {
            grade = 'B';
        } else if (result >= 90 && result <= 100) {
            grade = 'A';
        }

        //returning the results with a template strings.
        return console.log("You got a " + grade + " (" + result + "%" + ")");

    }
    // Calling the function
    gradeCalculator(78);

}