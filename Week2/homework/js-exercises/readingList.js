'use strict';

{
  const myBooks = [
    {
      title: 'Animal Farm',
      author: 'George Orwell',
      isAlreadyRead: true,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isAlreadyRead: true,
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      isAlreadyRead: false,
    }
  ]

  // FOR LOOP
  // for (let i = 0; i < myBooks.length; ++i) {
  //   console.log(`${myBooks[i].title} by ${myBooks[i].author}`);
  //   if (myBooks[i].isAlreadyRead === true) {
  //     console.log(`You already read "${myBooks[i].title}"`);
  //   } else {
  //     console.log(`You still need to read "${myBooks[i].title}"`);
  //   }
  // }


  // FOR IN LOOP
  for (const i in myBooks) {
    console.log(`${myBooks[i].title} by ${myBooks[i].author}`);
    if (myBooks[i].isAlreadyRead === true) {
      console.log(`You already read "${myBooks[i].title}"`);
    } else {
      console.log(`You still need to read "${myBooks[i].title}"`);
    }
    console.log('-------------------------');
  }
}
