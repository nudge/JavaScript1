"use strict";

let myRecipe = {
    name: "sarma",
    ingredients: ["rice", "grape leaves", "tomato pasta", "pomegranade syrup", "raisins", "nuts"],
    servings :"4",
};
let myRecipeKeys = Object.keys(myRecipe);
for (let i = 0; i < myRecipeKeys.length; i++) {
    console.log(myRecipeKeys[i] + ": " + myRecipe[myRecipeKeys[i]])  
};