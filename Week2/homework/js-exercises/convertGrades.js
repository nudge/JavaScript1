'use strict';

let gradeUsa = '';

let score ='';

function gradeCalculator(score) {
    if (90 <= score && score <= 100) {
    gradeUsa = 'A';
    }
        else if (80 <= score && score <= 89) {
            gradeUsa = 'B';
        }
        else if (70 <= score && score <=79) {
            gradeUsa = 'C';
        }
        else if (60 <= score && score <=69) {
            gradeUsa = 'D';
        }
        else if (50 <= score && score <=59) {
            gradeUsa = 'E';
        }
        else if (0 <= score && score <=49) {
            gradeUsa = 'F';
        }
        



return console.log('You got a '  + gradeUsa + ' (' + score + '%)!');;
  
}

gradeCalculator(98);

