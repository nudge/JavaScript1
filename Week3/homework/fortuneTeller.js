'use strict';
{
    
    function getRandom(array){
        return Math.floor(Math.random() * array.length);
    };

    function tellFortune(numChildren, partnerNames, locations, jobs){
        return `You will be a ${jobs[getRandom(jobs)]} in ${locations[getRandom(locations)]}, and married to ${partnerNames[getRandom(partnerNames)]} with ${numChildren[getRandom(numChildren)]} kids.`
    };

    let partnerNames = ["Ayse", "Fatma", "Hayriye", "Kezban", "Hatice"];
    let numChildren = [1, 2, 3, 4, 5];
    let locations = ["Amsterdam", "Rotterdam", "Alkmar", "Hengelo", "Tilburg"];
    let jobs = ["programmer", "doctor", "teacher", "lawyer", "officer"];

    console.log(tellFortune(numChildren, partnerNames, locations, jobs));
}