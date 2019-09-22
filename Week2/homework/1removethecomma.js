// Consider the following string:
//
// let myString = 'hello,this,is,a,difficult,to,read,sentence';
// Add the variable to your file.
let myString = 'hello,this,is,a,difficult,to,read,sentence';
// Log the length of myString.
console.log("The length is: ", myString.length);
// The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces. (use Google!)

//try One...
let changed1 = myString.split(',').join(' ');

// Try Two...
let changed2 = "";
for(let i = 0; i < myString.length; i++){
  if(myString[i] !== ','){
    changed2 += myString[i];
  } else {
    changed2 += " ";
  }
}



// After replacing the commas, log myString to see if you succeeded.
console.log("The new string1 is: ", changed1);
console.log("The new string2 is: ", changed2);
