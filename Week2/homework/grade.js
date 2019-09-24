"use strict";

//This function turns scores into percentage values

function calcPerc (studentScore, maxScore){
    let score = Math.round(( studentScore / maxScore) * 100);
    return score;
}
//This function shows the letter grade and score as percentage value
function calcGrade (score, letterGrade){
 
    if(score >= 90) {
        letterGrade = "A";
        console.log(" You got an " + letterGrade + " ("+ score + "%)");
    }
    if(score <= 89 && score >= 80) {
        letterGrade = "B";
        console.log(" You got a " + letterGrade +" ("+ score + "%)");
    }
    if(score <=79 && score >= 70) {
        letterGrade = "C";
        console.log(" You got a " + letterGrade +" ("+ score + "%)");
    }
    if(score <= 69 && score >= 60) {
        letterGrade ="D";
        console.log(" You got a " + letterGrade + " ("+ score + "%)");
    }
    if(score <=59 && score >= 50) { 
        letterGrade = "E";
        console.log(" You got an " + letterGrade + " ("+ score + "%)");
    }
    if(score <50) {
        letterGrade = "F";
        console.log(" You got an " + letterGrade +" ("+ score + "%)");
    }
}

calcGrade(calcPerc(85, 100));
// other examples
calcGrade(calcPerc(27, 50));
calcGrade(calcPerc(65, 120));
calcGrade(calcPerc(7.5, 12));

