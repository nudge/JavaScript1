'use strict'

function giveCompliment(name) {
    const compliments = ["amazing", "great", "awesome", "beautiful", "clever", "strong", "perfect", "kind", "courageous", "fair-minded"];
    const randomComp = compliments[Math.floor(Math.random() * compliments.length)];
    return `You are ${randomComp} , ${name}`;
}
const myName = "Ceylan"
console.log(giveCompliment(myName));
console.log(giveCompliment(myName));
console.log(giveCompliment(myName));