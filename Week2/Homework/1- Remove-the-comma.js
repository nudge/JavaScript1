
"use strict";
const myString = 'hello,this,is,a,difficult,to,read,sentence';

console.log(myString.length);

const myNewString = myString.replace(/,/g, ' ');

console.log(myNewString);
