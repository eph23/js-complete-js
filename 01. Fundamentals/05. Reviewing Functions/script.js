"use strict";

// Function Declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// Extended form
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} will retire in ${retirement} years`;
    } else {
        return `${firstName} has already retired 🥂🎉`;
    }
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));
console.log(yearsUntilRetirement(1970, "Mike"));
