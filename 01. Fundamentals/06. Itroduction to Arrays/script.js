"use strict";

// Array Literal
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// Array Constructor
const yearsArr = new Array(1991, 1984, 2008, 2020);
console.log(yearsArr);

// Array of
const prices = Array.of(100, 200, 300);
console.log(prices);

// Array from()
const chars = Array.from("Hello");
console.log(chars);

// Array property
console.log(friends.length);

// Accessing array value
console.log(friends[0]);
console.log(friends[friends.length - 1]);

// Mutating Array elements/values
console.log(friends);
friends[2] = "Jay";
console.log(friends);

/* NOTE: Arrays can store any type of data.
Any numbers, strings, booleans, objects, arrays, functions, or even expressions that evaluate to a value. */

const firstName = "Ephraim";
const birthYear = 1988;
const eph = [firstName, "S", 2037 - birthYear, "Web-Dev", friends];
console.log(eph);

// Array Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[0]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
