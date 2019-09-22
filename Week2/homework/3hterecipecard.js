// Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
//
// Declare a variable that holds an object (your meal recipe).
const recipe = {};
// Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
recipe.title = "Omelete";
recipe.servings = 5;
recipe.ingredients = ['10 eggs', '5 strips of bacon', '5 tsp salt/pepper'];
// Log each property out seperately, using a loop (for, while or do/while)
for (var key in recipe) {
  if (key === 'title') {
    console.log("Meal name: ", recipe[key]);
  } else if (key === 'servings') {
    console.log("Serves: ", recipe[key]);
  } else {
    console.log("Ingredients: ");
    for (item of recipe.ingredients) {
      console.log(item);
    }
  }
}
// It should look similar to this:
//
// Meal name: Omelete
// Serves: 2
// Ingredients:
// 4 eggs
// 2 strips of bacon
// 1 tsp salt/pepper
