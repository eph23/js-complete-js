'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The reduce method
const total = movements.reduce((acc, curr, i) => {
  console.log(`${i}: ${acc} --- ${curr} `);
  return acc + curr;
}, 100);
console.log(total);
