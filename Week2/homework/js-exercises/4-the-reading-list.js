{
    'use strict';

    let library = [
        { title: "Harry Potter",
        author: "J.K. Rowling",
        alreadyRead: true,
        },

        { title: "The Lord of the Rings",
        author: "J.R.R Tolkien",
        alreadyRead: false,
        },

        { title: "Les Misérables",
        author: "Victor Hugo",
        alreadyRead: true,
        },
    ];

    for (const obj in library){
        console.log(library[obj].title + " by " + library[obj].author);
    
            if (library[obj].alreadyRead === true){
                console.log("You already read " + library[obj].title);
            } else {
                console.log("You still need to read " + library[obj].title );
            }
    
    }


}