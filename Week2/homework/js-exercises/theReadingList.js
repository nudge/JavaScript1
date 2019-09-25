'use script'; 
{
    let book1 = ["Olaganustu bir gece", "Stefan Zweig", false];
    let book2 = ["Kuyucakli Yusuf", "Sabahattin Ali", true];
    let book3 = ["Satranc", "Stefan Zweig", true];
    // for (i = 0; i <  )
    console.log(book1[0] + " by " + book1[1]);
    console.log(book2[0] + " by " + book2[1]);
    console.log(book3[0] + " by " + book3[1]);
    if (book1[2] === true) {
        console.log("You already read " + book1[0]);
    }
    else {
        console.log("You still need to read " + book1[0]);
    }
    if (book2[2] === true) {
        console.log("You already read " + book2[0]);
    }
    else {
        console.log("You still need to read " + book2[0]);
    }
    if (book3[2] === true) {
        console.log("You already read " + book3[0]);
    }
    else {
        console.log("You still need to read " + book3[0]);
    }
}