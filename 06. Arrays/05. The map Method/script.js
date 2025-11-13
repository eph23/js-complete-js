'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The map method
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (movement) {
  return movement * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((movement, index) => {
  if (movement > 0) {
    return `Movement ${index + 1}: You deposited ${movement}`;
  } else {
    return `Movement ${index + 1}: You withdrew ${movement}`;
  }
});
console.log(movementsDescription);
