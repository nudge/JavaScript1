/*Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!

Declare a variable that holds an object (your meal recipe).
Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
Log each property out seperately, using a loop (for, while or do/while)
It should look similar to this:

Meal name: Omelete
Serves: 2
Ingredients:
4 eggs
2 strips of bacon
1 tsp salt/pepper*/

"use strict";

let recipe = {
  "Meal name": "Pizza",
  Serves: 4,
  Ingredients: ["cheese", "flour", "pepperoni"]
};
console.log(recipe);
for (var key in recipe) {
  console.log(`${key} : ${recipe[key]}`);
}
