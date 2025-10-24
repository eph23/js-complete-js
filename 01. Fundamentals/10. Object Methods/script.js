"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    // object methods
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // Challenge
    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${
            this.job
        }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

eph.calcAge(); // Have to call the method at least once

console.log(eph.age);

/* 
Challenge
Ephraim is a 49 years old teacher, and he has drivers license
 */
console.log(eph.getSummery());
