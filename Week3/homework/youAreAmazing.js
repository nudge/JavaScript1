'use strict';
{
    function giveCompliment(name){
        const compliments = ["cool", "awesome", "legend", "great", "pretty", "smart", "hardworking", "patient", "respected", "handsome"];
        return "You are " + compliments[Math.floor(Math.random() * compliments.length)] + ", " + name;
    };

    console.log(giveCompliment('Yalcin'));
    console.log(giveCompliment('Yalcin'));
    console.log(giveCompliment('Yalcin'));
}
