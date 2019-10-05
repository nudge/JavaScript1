{
    "use strict";

    /*     Write a function named giveCompliment
    It takes 1 argument: your name
    Inside the function create an array with 10 strings. Each string should be a compliment, like "great", "awesome"
    Write logic that randomly selects a compliment
    Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
    Call the function three times, giving each function call the same argument: your name.
     */

    function giveCompliments(name) {



        let complimentArray = ["Great", "Avesome", "Unique", "Elegant", "Creative", "Smart", "Brave", "Kind", "Funny", "Trustworthy"];
        let getRandomNumber = [Math.floor(Math.random() * complimentArray.length)];
        let randomCompliment = complimentArray[getRandomNumber];

        console.log("You are " + randomCompliment + " " + name + "!");

    }

    giveCompliments("Noer");
    giveCompliments("Noer");
    giveCompliments("Noer");

}