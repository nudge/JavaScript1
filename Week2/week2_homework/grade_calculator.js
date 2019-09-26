"use strcit";


// function to insert the score and calculate the grade & the percentage requested.
function calculate_test_score(score) {
  // 1- convert the score into a percentage
  const full_score = 100;
  const score_percentage = (score / full_score) * 100;

  // 2- calculate what grade corresponds with that percentage, and
  let grade;

  // 3- shows in the command line the result: the grade and the percentage
  switch (true) {
    case score_percentage >= 90 && score_percentage <= 100:
      grade = "A"
      break;
    case score_percentage >= 80 && score_percentage <= 89:
      grade = "B"
      break;
    case score_percentage >= 70 && score_percentage <= 79:
      grade = "C"
      break;
    case score_percentage >= 60 && score_percentage <= 69:
      grade = "D"
      break;
    case score_percentage >= 50 && score_percentage <= 59:
      grade = "E"
      break;
    default:
      grade = "F"
  }

  // return
  return console.log(`You got a ${grade} (${score_percentage}%)!`);
}

// calling the function
calculate_test_score(85);
