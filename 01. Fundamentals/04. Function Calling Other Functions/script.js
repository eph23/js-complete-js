"use strict";

// Helper Function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

// Function calling other function (helper function)
function fruitProcessor(apples, oranges) {
    // Helper function called inside the function
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

// Calling function with arguments
const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 2);
console.log(appleOrangeJuice);
