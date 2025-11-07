'use strict';

// Working with arrays
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Ephraim S'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const words = name.split(' ');
  const capitalizedWords = [];
  for (const word of words) {
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(capitalizedWords.join(' '));
};

const passenger = 'jessica ann smith davis';
capitalizeName(passenger);

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Ephraim'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  return str.slice(-4).padStart(str.length, '*');
};
console.log(maskCreditCard(56456456446465));
console.log(maskCreditCard(77777123123666));

const message2 = 'Bad weather... All Departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
