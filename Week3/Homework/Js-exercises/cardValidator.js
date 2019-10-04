"use strict";

const cardValidator = function(cardNumber) {
  //first converts our number into an array of strings then using for of, converts the string array to numbers array
  if (Number.isInteger(Number(cardNumber)) !== true) {
    return console.log("invalid characters!");
  }
  let strArr = cardNumber.toString().split("");
  const numArr = [];
  for (let ele of strArr) {
    numArr.push(Number(ele));
  }
  console.log(numArr.length);
  if (numArr.length !== 16) {
    return console.log("invalid card ,there is less or more than 16 digits!");
  }
  //pushes the numbers with -1 index(numbers who dont exist in indOfArr array) so if length.indOfArr is less than or equal to 1 it means that all numbers are same
  const indOfArr = [];
  for (let index = 0; index < numArr.length; index++) {
    const number = numArr[index];
    if (indOfArr.indexOf(number) === -1) {
      indOfArr.push(number);
    }
  }
  if (indOfArr.length <= 1) {
    return console.log("invalid card, all digits can't be same");
  }
  if (numArr[numArr.length - 1] % 2 !== 0) {
    return console.log("invalid card, last number is not even");
  }
  let total = 0;
  for (let i in numArr) {
    total += numArr[i];
  }
  if (total < 16) {
    return console.log("invalid card, sum is less than 16");
  } else {
    return console.log("card is valid");
  }
};

cardValidator(1111111111111110);
cardValidator(111111111111111);
cardValidator("12345f1122345667");
cardValidator(1000000000000001);
