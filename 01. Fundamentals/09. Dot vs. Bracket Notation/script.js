"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
};

console.log(eph);

// Accessing object values
console.log(eph.lastName);
console.log(eph["lastName"]);

const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph["last" + nameKey]);

// From user input
/* const interestedIn = prompt(
    `What do you want to know about Eph? Choose between firstName, lastName, age, job and friends`
);

if (eph[interestedIn]) console.log(eph[interestedIn]);
else
    console.log(
        `Wrong request. Choose between firstName, lastName, age, job and friends`
    ); */

// Mutating objects
eph.location = "BD";
eph.twitter = "@ephraimS";
console.log(eph);

/* 
Exercise
Ephraim has 3 friends and his best friend is called Michael 
*/

console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[1]}`
);
