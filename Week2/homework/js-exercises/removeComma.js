'use strict';

{
  let myString = 'hello,this,is,a,difficult,to,read,sentence';

  console.log(myString.length);

  myString = myString.replace(/,/g, ' ');//I give a space after comma!
  console.log(myString);
}