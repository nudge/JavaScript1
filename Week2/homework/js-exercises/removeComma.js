'use script';
{
    let myString = 'hello,this,is,a,difficult,to,read,sentence';
    console.log(myString.length);

    let myStringArray = myString.split(',');
    console.log(myStringArray);
    let myStringFromMyStringArray = myStringArray.join(' ');
    console.log(myStringFromMyStringArray);

    
    // myString = myString.replace(/,/g, " ");
    // console.log(myString);
}