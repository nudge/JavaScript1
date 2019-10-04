"use strict";

let giveCompliment = function(name) {
  let complimentsList = [
    "respected",
    "praiseworthy",
    "awesome",
    "handsome",
    "heroic",
    "noteworthy",
    "intelligent",
    "hardworking",
    "humble",
    "admirable"
  ];
  let getRandomNumber = [Math.floor(Math.random() * complimentsList.length)];
  let randomCompliment = complimentsList[getRandomNumber];
  console.log("You are " + randomCompliment + ", " + name + "!");
};

giveCompliment("Noer");
