"use strict";

const eph = [
    "Ephraim",
    "S",
    "Web Dev",
    2037 - 1988,
    ["Michael", "Steven", "Bob"],
];

// Looping array
for (let i = 0; i < eph.length; i++) {
    console.log(eph[i]);
}

for (let i = 0; i < eph.length; i++) {
    let friends = [];
    if (Array.isArray(eph[i])) {
        for (let j = 0; j < eph[i].length; j++) {
            const numFriends = eph[i].length;
            friends.push(eph[i][j]);
            console.log(
                `${eph[0]} has ${numFriends} friends, and they are ${friends}`
            );
        }
    }
}

for (let i = 0; i < eph.length; i++) {
    console.log(eph[i], typeof eph[i]);
}

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const birthYears = [1991, 2007, 1969, 2020];
for (let i = 0; i < birthYears.length; i++) {
    console.log(calcAge(birthYears[i]));
}

// Continue
console.log("---CONTINUE---");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "number") continue;
    console.log(typeof eph[i], eph[i]);
}

// Break
console.log("---Break---");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "number") break;
    console.log(typeof eph[i], eph[i]);
}
