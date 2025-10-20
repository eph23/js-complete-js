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
