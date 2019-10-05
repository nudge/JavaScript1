 
'use strict'
let name = prompt("Enter your beautiful name"); 
  
 function givecomplement (name){
	 
    const compliments=["great", "awesome","trusty","respectful", "friendly", "clever", "Generous", "brilliant", "handsome", "beautiful"];
	 
   return `You are ${compliments[Math.floor(Math.random() * compliments.length)]}, ${name}`;
}

console.log(givecomplement(name));
console.log(givecomplement(name));
console.log(givecomplement(name));
