'use strict';

{
  const recipeCard = {
    title: 'Noodle Soup',
    servings: 4,
    ingredients: [
      '1 spoon butter',
      '1 small glass noodle',
      '1 spoon tomato paste',
      '1 liter water',
      'Some spices',
    ],
  };

  for (const item in recipeCard) {
    if (item === 'title') {
      console.log(`Meal name: ${recipeCard[item]}`);
    } else if (item === 'servings') {
      console.log(`Serves: ${recipeCard[item]}`);
    } else {
      console.log(`Ingredients:`);
      for (const index of recipeCard.ingredients) {
        console.log(index);
      }
    }
  }
}
