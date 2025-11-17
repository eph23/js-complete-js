'use strict';

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

console.log(46446545456454564565645646456456456n);
console.log(BigInt(46446545456454564565645646456456456));

// Operations
console.log(10000n + 10000n);
console.log(53313123123123123123123123132123123123123123112n * 100000000n);

const huge = 205212023151513131231123123132n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + ' is really big!!!');
