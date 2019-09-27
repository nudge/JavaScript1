'use strict';

{
  // let keyword was used because note will change continuously.
  function calcGrade(point) { // I use one parameter.
    let grade;
    if (point >= 90) {
      grade = 'A';
    } else if (point >= 80) {
      grade = 'B';
    } else if (point >= 70) {
      grade = 'C';
    } else if (point >= 60) {
      grade = 'D';
    } else if (point >= 50) {
      grade = 'E';
    } else if (point >= 40) {
      grade = 'F';
    }
    console.log(`You got a ${grade} (${point}%)!`);
  }
  calcGrade(67);
}