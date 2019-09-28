'use strict'
let mealRecipe = {
    Meal: 'Turkish Omelete',
    Servings: '2',
    Ingredients: [
        '4 eggs',
        '2 tomatoes',
        '2 peppers',
        '1 onion'
    ]
};

for (let [key, value] of Object.entries(mealRecipe)) {
    console.log(`${key}: ${value}`);
  }
// I wanted to make something like: console.log(Object.keys(mealRecipe)[i] + ': ' + mealRecipe[i]); However Icouldn't find a way to loop through Object values. After long reasearch, I found another way in MDN and adapted it. I hope this is not cheating?

