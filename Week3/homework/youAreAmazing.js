'use strict';
{
    function giveCompliment(){
        let myName = "Yalcin";
        let myArr = ["cool", "awesome", "legend", "great", "pretty", "smart", "hardworking", "patient", "respected", "handsome"];
        return "You are " + myArr[Math.floor(Math.random() * myArr.length)] + "," + myName;
    }

    console.log(giveCompliment());
    console.log(giveCompliment());
    console.log(giveCompliment());
}
