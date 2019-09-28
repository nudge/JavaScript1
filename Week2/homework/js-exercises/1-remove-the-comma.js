// Exercise 1: Remove the comma

{
    'use strict';

    let myString = 'hello,this,is,a,difficult,to,read,sentence';

    //Log the length of myString.
    console.log(myString.length);

    // Find a way to remove the commas from the string and replace them with spaces. 
    myString = myString.replace(/,/g , ' ');
    console.log(myString);

}