"use strict"

/*the function below will put the score into a class of grade*/
function gradeCalculator (score) {
    let grade = " "
    if (score < 0 || score >100){
        return 'You score should be a number between 0 and 100'
    }else{
        if (score <= 49){
            grade= "F"
        } else if (score < 59){
            grade= "E"
        } else if (score <69){
            grade= "D"
        } else if (score <79){
            grade= "C"
        } else if (score <89){
            grade= "B"
        } else if (score <= 100){
            grade= "A"
        }
        return `You got a ${grade} (${score}%)!`
    }
}

console.log(gradeCalculator(102))