"use script";

let tellFortune = function () {
    let arrNumChild = [0, 1, 2, 3, 4];
    let arrPartName = ["Alice", "Alyona", "Amber", "Nabby", "Jabby"];
    let arrLoc = ["Jericho", "Alabama", "Sahara", "Leiden", "Ankara"];
    let arrJobTit = ["CEO", "Chef", "Engineer", "Plumber", "Candy Master"];

    let getRandomNumChild =
        arrNumChild[Math.floor(Math.random() * arrNumChild.length)];
    let getRandomPartName =
        arrPartName[Math.floor(Math.random() * arrPartName.length)];
    let getRandomLoc = arrLoc[Math.floor(Math.random() * arrLoc.length)];
    let getRandomJob = arrJobTit[Math.floor(Math.random() * arrJobTit.length)];

    console.log(
        "You will be " +
        getRandomJob +
        " in " +
        getRandomLoc +
        " , and married to " +
        getRandomPartName +
        " with " +
        getRandomNumChild +
        " kids."
    );
};

tellFortune();
