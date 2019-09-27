'use strict';

{
  const myArr = [
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
  // for (let i = 0; i < myArr.length; ++i) {
  //   console.log(`${myArr[i].title} by ${myArr[i].author}`);
  //   if (myArr[i].isAlreadyRead === true) {
  //     console.log(`You already read "${myArr[i].title}"`);
  //   } else {
  //     console.log(`You still need to read "${myArr[i].title}"`);
  //   }
  // }


  // FOR IN LOOP
  for (const i in myArr) {
    console.log(`${myArr[i].title} by ${myArr[i].author}`);
    if (myArr[i].isAlreadyRead === true) {
      console.log(`You already read "${myArr[i].title}"`);
    } else {
      console.log(`You still need to read "${myArr[i].title}"`);
    }
    console.log('-------------------------');
  }
}
