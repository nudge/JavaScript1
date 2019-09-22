// Keep track of which books you read and which books you want to read!
//
// Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
const list = [{title: 'Harry', author: 'J.K. Rowling', alreadyRead: false},{title: 'Lord of the Rings', author: 'J.R.R.Tolkien', alreadyRead: true},{title: 'Les Misérables', author: 'Victor Hugo', alreadyRead: false}];

// Loop through the array of books.
// For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
// If you haven't read it log a string like You still need to read "The Lord of the Rings"

list.forEach((item)=>{
  console.log(`${item.title} by ${item.author}`);
  console.log( item.alreadyRead ? `You already read "${item.title}"` :`You still need to read "${item.title}"`);
});

console.log("__________________________________________________");

for (item of list) {
  console.log(item.title + " by " + item.author);
  if (item.alreadyRead) {
    console.log("You already read \"" + item.title +"\"");
  } else {
    console.log("You still need to read \"" + item.title +"\"");
  }
}
