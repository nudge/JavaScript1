'use strict';
const giveCompliment = (name) => {
    // Array with ten Complimen
    const complimentArray = ['great', 'awesome', 'great', 'nice', 'Elegant', 'Elegant', 'Majestic', 'Lovely', 'Striking', 'Amazing'];
    // to ronden the content of the array 
    const randomIndex = Math.floor(Math.random() * complimentArray.length);

    return `You are  ${complimentArray[randomIndex]} ${name}`
}
console.log(giveCompliment('Ali'));
console.log(giveCompliment('Ali')); 
console.log(giveCompliment('Ali'));randomArray
