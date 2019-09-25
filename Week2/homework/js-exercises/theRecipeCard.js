'use script'; 
{
    let starterSmoothie = { 
        title: "Smoothie", 
        servings: 2, 
        ingredients: [
            "1 cup fresh blueberries",
            "1 cup grape juice",
            "1 banana, cut into chunks and frozen",
            "1/2 cup low-fat plain Greek-style yogurt",
            "1 teaspoon honey, or to taste"
        ]
    }

    for (item in starterSmoothie) {
        console.log(item + ": " + starterSmoothie[item]);
    }
    
}
