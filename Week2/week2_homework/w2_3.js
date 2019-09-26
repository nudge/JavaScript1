"use strict";

const myRecipe = {
  title: "mac and chees",
  servings: 4,
  ingrediants: ["1 box elbow macaroni", "1/4 cup butter", "2 cups milk", "1/4 cup all-purpose flour", "2 cups shredded Cheddar cheese", "salt and peper"]
}

// 1
for (const prop in myRecipe) {
  console.log(`${prop}: ${myRecipe[prop]}`);
}

// 2
for (const [keys, values] of Object.entries(myRecipe)) {
  console.log(`${keys}: ${values}`);
}
