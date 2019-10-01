'use strict';
const giveCompliment = (name) => {
    // Array with ten Complimen
    const complimentArray = ['great', 'awesome', 'great', 'nice', 'Elegant', 'Elegant', 'Majestic', 'Lovely', 'Striking', 'Amazing'];
    // to ronden the content of the array 
    const randomArray = Math.floor(Math.random() * complimentArray.length);

    return `You are  ${complimentArray[randomArray]} ${name}`
}
console.log(giveCompliment('Ali'));
console.log(giveCompliment('Ali'));
console.log(giveCompliment('Ali'));