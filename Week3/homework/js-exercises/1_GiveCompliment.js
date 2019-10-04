'use strict'
function giveCompliment(yourName) {
    let complimentWords = ['great', 'wonderful', 'amazing', 'majestic', 'lovely', 'kind', 'stunning', 'awesome', 'elegant', 'superb'];
    let randomCompliment = complimentWords[Math.floor((Math.random()*complimentWords.length))];
    return 'You are ' + randomCompliment + ' ' + yourName + '!';

}

let name = 'Sebastian';
let result = giveCompliment(name);
console.log(result);


