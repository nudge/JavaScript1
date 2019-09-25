'use strict'
const myMealRecipe = {
    "Meal Name": "Omelete",
    Serves: 2,
    Ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"]
}
for (const propt in myMealRecipe) {
    if (typeof myMealRecipe[propt] != "object") {
        console.log(propt + " : " + myMealRecipe[propt])
    } else {
        console.log(propt + " : ");
        myMealRecipe[propt].forEach(item => {
            console.log(item);
        });
    }
}