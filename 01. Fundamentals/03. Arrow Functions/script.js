"use strict";

// Function Declaration
function calcAgeDec(birthYear) {
    return 2037 - birthYear;
}

const ageDec = calcAgeDec(1988);
console.log("Function Declaration", ageDec);

// Function Expression
const calcAgeExp = function (birthYear) {
    return 2037 - birthYear;
};

const ageExp = calcAgeExp(1988);
console.log("Function Expression", ageDec);

// Arrow Function
// Simple form
const calcAgeArr = (birthYear) => {
    return 2037 - birthYear;
};

const ageArr = calcAgeArr(1988);
console.log("Arrow Function", ageDec);

// Extended form
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} will retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));
