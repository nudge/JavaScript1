"use strict";

//Creating an array of objects

const bookList = [
    {
     title: "One Hundred Years of Solitude",
     author: "Gabriel Garcia Marquez",
     alreadyRead: true
    },
    {
    title:"The Blind Owl",
    author:"Sadegh Hedayat",
    alreadyRead: false
    },
    {
    title: "Ince Memed",
    author: "Yaşar Kemal",
    alreadyRead: true
    }
]

// Loop through the array

let i = 0;

const bookKeys = Object.keys(bookList[i]);
for(i = 0; i < bookList.length; i++){
    console.log(bookList[i]);
}

console.log("<---->")

//Title and author
for(i = 0; i < bookList.length; i++){
console.log(bookList[i][bookKeys[0]] + " by " + bookList[i][bookKeys[1]]);
}

console.log("<---->")

// Two logs showing already read or not

for(i = 0; i < bookList.length; i++){
    if (bookList[i][bookKeys[2]] === true){
        console.log("You already read " +"\"" + bookList[i][bookKeys[0]]+"\"" )
    } else {
        console.log("You still need to read " + "\"" + bookList[i][bookKeys[0]]  + "\"")

    }
}

