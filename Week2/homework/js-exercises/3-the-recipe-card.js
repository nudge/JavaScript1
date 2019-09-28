// Exercise 3: The recipe card

{
    'use strict';

    let easyPancake = {
        title: 'Easy Pancake',
        serves: 4,
        ingredients: [
            '100g plain flour',
            '2 large eggs',
            '300ml milk',
            '1 tbsp sunflower or vegetable oil',
            'lemon wedges, to serve (optional)',
            'cater sugar, to serve (optional)',
        ]

    }

    for ( const key of Object.keys(easyPancake)){
        console.log( key + ": " + easyPancake[key]);

    }

}