'use strict';

const eurToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Chaining Methods
const totalDeposits = movements
  .filter(movement => movement > 0)
  .map(movement => movement * eurToUSD)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalDeposits);

const totalWithdrawals = movements
  .filter(movement => movement < 0)
  .map(movement => movement * eurToUSD)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalWithdrawals);
