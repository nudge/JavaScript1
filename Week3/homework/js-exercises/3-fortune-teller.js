{
    // Be your own fortune teller

    'use strict';

    // Write a function named tellFortune.
    // It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
    // Randomly select values from the arrays.
    // Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."   

    function tellFortune(a, b, c, d) {

        const RandomChildNum = a[Math.floor(Math.random() * (a.length - 1))];
        const RandomPartnerName = b[Math.floor(Math.random() * (b.length - 1))];
        const RandomLocation = c[Math.floor(Math.random() * (c.length - 1))];
        const RandomJob = d[Math.floor(Math.random() * (d.length - 1))];

        console.log("You will be a " + RandomJob + " in " + RandomLocation + ", and married to " + RandomPartnerName + " with " + RandomChildNum + " kids.");

    }
    /*Create 4 arrays, numChildren, partnerNames, locations and jobs.
    Give each array 5 random values that make sense */
    const numChildren = [1, 2, 3, 4, 5];
    const partnerNames = ["Joe", "Nova", "Wolfgang", "Maria", "Olesya"];
    const locations = ["USA", "Norway", "Japan", "Russia", "Germany"];
    const jobs = ["Marketing Manager", "Security Analyst", "Software Engineer", "Data Analyst", "Product Manager"];

    // Call the function 1 time, by passing the arrays as the argument.
    tellFortune(numChildren, partnerNames, locations, jobs);

}