'use strict';

{
  // Exercise 3: Be your own fortune teller

  // Write a function named tellFortune.
  // It takes 4 arguments: number of children (number),
  // partner's name (string), geographic location (string), job title (string).
  const tellFortune = (numberOfChildren, partnersName, geographicLocation, jobTitle) => {
    // Randomly select values from the arrays.
    numberOfChildren = numChildren[Math.floor(Math.random() * numChildren.length)];
    partnersName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    geographicLocation = locations[Math.floor(Math.random() * locations.length)];
    jobTitle = jobs[Math.floor(Math.random() * jobs.length)];

    // Return a string: "You will be a [JOB_TITLE] in [LOCATION], 
    // and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
    return `You will be ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;


  }

  // Create 4 arrays, numChildren, partnerNames, locations and jobs.
  // Give each array 5 random values that make sense
  const numChildren = [1, 2, 3, 4, 5];
  const partnerNames = ['Yalcin', 'Sef', 'Samet', 'Ceylan', 'Ali'];
  const locations = ['Londra', 'Istanbul', 'Amsterdam', 'Denizli', 'Konya'];
  const jobs = ['teacher', 'programmer', 'doctor', 'architect', 'psychologist'];

  // Call the function 1 time, by passing the arrays as the argument.
  console.log(tellFortune());
}