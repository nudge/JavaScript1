"use strict";

let myString = 'hello,is,a,difficult,to,read,sentence';

console.log(myString.length);
//1
myString = myString.replace(/,/g, " ");
console.log(myString)
//2
let sentence = myString.split(",").join(' ');
console.log(sentence);








