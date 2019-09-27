'use strict';
/*****Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!

Declare a variable that holds an object (your meal recipe).
Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
Log each property out seperately, using a loop (for, while or do/while)
It should look similar to this:

Meal name: Omelete
Serves: 2
Ingredients:
4 eggs
2 strips of bacon
1 tsp salt/pepper******/

const myMeal = {
  'Meal name': 'corba',
  serves: 6,
  ingredients: ['2 tomato', '1 cup flavor', '2 cup water'],
};

for (let key in myMeal) {
  if (key === 'Meal name') {
    console.log(`My meal: ${myMeal[key]}`);
  } else if (key === 'serves') {
    console.log(`Serves: ${myMeal[key]}`);
  } else {
    console.log(`Ingredients: `);
    for (let i = 0; i < myMeal.ingredients.length; i++) {
      console.log(myMeal.ingredients[i]);
    }
    // Also instead of for loop we can use 'for ... in' , 'for ... of' and 'while' loops. like below:
    // for (let stuff of myMeal.ingredients) {
    //   console.log(stuff);
    // }
    //                  or
    // for (let key in myMeal.ingredients) {
    //   console.log(myMeal.ingredients[key]);
    // }
    //                    or
    // let i = 0;
    // while (i < myMeal.ingredients.length) {
    //   console.log(myMeal.ingredients[i]);
    //   i++;
    // }
  }
}
//                      or
// for (let i = 0; i < Object.keys(myMeal).length; i++) {
//   if (i < 2) {
//     console.log(Object.keys(myMeal)[i], ':', Object.values(myMeal)[i]);
//   } else {
//     console.log(Object.keys(myMeal)[i], ':');
//     for (let j = 0; j < Object.values(myMeal)[i].length; j++) {
//       console.log(Object.values(myMeal)[i][j]);
//     }
//   }
// }
