'use strict'
const mybooksArray = [{
        title: "Book1",
        author: "Ceylan",
        alreadyRead: true
    },
    {
        title: "Book2",
        author: "Ceylan",
        alreadyRead: false
    }, {
        title: "Book3",
        author: "Ceylan",
        alreadyRead: false
    }
];
mybooksArray.forEach(book => {
    console.log(book.title + " by " + book.author);
    if (book.alreadyRead === true) {
        console.log("You already read " + book.title);
    } else {
        console.log("You still need to read " + book.title);
    }
})