"use strict";

const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// push method
friends.push("Jay");
console.log(friends);

// unshift method
friends.unshift("Sarah");
console.log(friends);

// pop method
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// indexOf
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Jay"));

// includes
console.log(friends.includes("Bob"));
console.log(friends.includes("Eph"));
console.log(friends.includes("Michael"));

if (friends.includes("Steven")) console.log(`You have a friend called  Steven`);
