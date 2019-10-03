'use strict';
{
    function tellFortune(){
        
        return "You will be a " + jobs[Math.floor(Math.random() * jobs.length)] + " in " + locations[Math.floor(Math.random() * locations.length)] + ", and married to " + partnerNames[Math.floor(Math.random() * partnerNames.length)] + " with " + numChildren[Math.floor(Math.random() * numChildren.length)] + " kids."
    }

    let partnerNames = ["Ayse", "Fatma", "Hayriye", "Kezban", "Hatice"];
    let numChildren = [1, 2, 3, 4, 5];
    let locations = ["Amsterdam", "Rotterdam", "Alkmar", "Hengelo", "Tilburg"];
    let jobs = ["programmer", "doctor", "teacher", "lawyer", "officer"];

    console.log(tellFortune());
}