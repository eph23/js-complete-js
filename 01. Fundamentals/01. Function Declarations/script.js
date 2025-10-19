"use strict";

function logger() {
    console.log("My name is Ephraim");
}

// Calling/invoking/running function
logger();

// Function with parameters
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// Calling function with arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
