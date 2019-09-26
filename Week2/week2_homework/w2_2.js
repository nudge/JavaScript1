"use strict";

for (let i = 0; i < 21; i++) {
  if (i % 2 !== 0) {
    console.log("The number " + i + " is odd!");
  }
  else {
    console.log("The number " + i + " is even!");
  }
}


// 2
for (let i = 0; i < 21; i++) {
  i % 2 !== 0 ? console.log(`The number ${i} is odd!`) : console.log(`The number ${i} is even!`);
}