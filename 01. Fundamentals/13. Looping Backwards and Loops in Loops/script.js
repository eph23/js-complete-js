"use strict";

const eph = [
    "Ephraim",
    "S",
    "Web Dev",
    2037 - 1988,
    ["Michael", "Steven", "Bob"],
];

// Looping Backwards
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(eph[i]);
}

// Loops in loops
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`===Starting Exercise 🏋🏻‍♀️ ${exercise}===`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`---Repetition ${rep} `);
    }
}
