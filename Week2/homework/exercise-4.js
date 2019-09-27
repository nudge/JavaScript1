'use strict';
// Exercise 4: The reading list

// Keep track of which books you read and which books you want to read!

// Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
// Loop through the array of books.
// For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
// If you haven't read it log a string like You still need to read "The Lord of the Rings"

const books = [
  { title: 'Crooked House', author: 'Agatha Christie', alreadyRead: true },
  { title: 'Hamlet', author: 'Shakespeare', alreadyRead: false },
  { title: 'The Miser', author: 'Molière', alreadyRead: true },
];

//                      1st way
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title + ' by ' + books[i].author);
//   if (books[i].alreadyRead === true) {
//     console.log('You already read' + '"' + books[i].title + '"');
//   } else {
//     console.log('You still need to read' + ' "' + books[i].title + '"');
//   }
// }
// =========================================================================
//                      2nd way
// for (let item of books) {
//   console.log(item.title + ' by ' + item.author);

//   if (item.alreadyRead === true) {
//     console.log(`You already read '${item.title}'`);
//   } else {
//     console.log(`You still need to read '${item.title}'`);
//   }
// }
// ============================================================================
//                      3rd way
let i = 0;

while (i < books.length) {
  console.log(books[i].title + ' by ' + books[i].author);

  if (books[i].alreadyRead == true) {
    console.log(`You already read '${books[i].title}'`);
  } else {
    console.log(`You still need to read '${books[i].title}'`);
  }
  i++;
}
