"use strict";

const fav_books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    alreadyRead: false
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    alreadyRead: false
  },
  {
    title: "Great Expectations",
    author: "charles Dickens",
    alreadyRead: true
  }
]

fav_books.forEach((book) => {
  console.log(book.title + " by " + book.author);
  if (book.alreadyRead === true) {
    console.log(`You already read ${book.title}`);
  } else {
    console.log(`You still need to read ${book.title}`);
  }
});




