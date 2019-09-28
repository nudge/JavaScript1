'use strict'
let books = [
    {
    Title: 'To Kill a Mockingbird',
    Author: 'Harper Lee',
    alreadyRead: true
},

{
    Title: 'A Tale of Two Cities',
    Author: 'Charles Dickens',
    alreadyRead: false
},

{
    Title: 'War and Peace',
    Author: 'Leo Tolstoy',
    alreadyRead: true,
}
];


for (let i=0; i < books.length; i+=1) { 
    console.log(books[i].Title + ' by ' + books[i].Author);

    if (books[i].alreadyRead === true) {
        console.log('You already read ' + books[i].Title)
    } else {
        console.log('You still need to read ' + books[i].Title)
    };
}

