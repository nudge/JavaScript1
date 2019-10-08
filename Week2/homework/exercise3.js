"use strict"

let myRecipe = {
    name: "Brigadeiro",
    serving: 30,
    ingredients: [
        "condensed milk ", 
        "dark chocolate ", 
        "butter "],
};

let myRecipeKeys = Object.keys;
for (let i = 0; i < myRecipeKeys.length; i++) {
    console.log(myRecipeKeys[i] + ": " + myRecipe[myRecipeKeys[i]]);
};

console.log(myRecipe)
