'use strict'
function giveCompliment(yourName) {
    const complimentWords = ['great', 'wonderful', 'amazing', 'majestic', 'lovely', 'kind', 'stunning', 'awesome', 'elegant', 'superb'];
    const randomCompliment = complimentWords[Math.floor((Math.random()*complimentWords.length))];
    // return 'You are ' + randomCompliment + ' ' + yourName + '!';
    return `You are ${randomCompliment} ${name}!`

}

const name = 'George';
const result = giveCompliment(name);
console.log(result);


