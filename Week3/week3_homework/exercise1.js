'use strict';

function giveCompliment(yourName) {
  const compliments = [
    'great',
    'awesome',
    'nice',
    'sweet',
    'kind',
    'amazing',
    'lovely',
    'wonderful',
    'brilliant',
    'gorgeous',
  ];
  const random = Math.floor(Math.random() * compliments.length);
  return `You are ${compliments[random]}, ${yourName}!`;
}
console.log(giveCompliment('Dua'));
