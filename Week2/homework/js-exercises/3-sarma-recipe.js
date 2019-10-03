"use strict";

const myRecipe = {
    name: "sarma",
    ingredients: ["rice", "grape leaves", "tomato pasta", "pomegranade syrup", "raisins", "nuts"],
    servings :"4",
};
const myRecipeKeys = Object.keys(myRecipe);
for (let i = 0; i < myRecipeKeys.length; i++) {
    console.log(myRecipeKeys[i] + ": " + myRecipe[myRecipeKeys[i]])  
};