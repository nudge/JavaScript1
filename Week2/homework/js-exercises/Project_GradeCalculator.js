'use strict'

// Below is the function with the grade intervals defined according to the US grading system.
function gradeCalculator(grade) {
    if (grade>100) {
        console.log('Are you kidding? You cannot have a grade of' + ' (' + grade + '%' + ')');
    } else if (100>=grade && grade>=90) {
        console.log('You got an A' + ' (' + grade + '%' + ')');
    } else if (grade>=80) {
        console.log('You got a B' + ' (' + grade + '%' + ')');
    } else if (grade>=70) {
        console.log('You got a C' + ' (' + grade + '%' + ')');
    } else if (grade>=60) {
        console.log('You got a D' + ' (' + grade + '%' + ')');
    } else if (grade>=50) {
        console.log('You got an E' + ' (' + grade + '%' + ')');
    } else if (grade>=0){
        console.log('You got an F' + ' (' + grade + '%' + ')');
    }

    return grade;
}

console.log(gradeCalculator(95)); 
// When you enter the grade of the student in the empty paranthesis, it finds the interval of the grade belongs to and logs it to the console.
