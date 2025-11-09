'use strict';

// Callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`${fn(str)}`);
  console.log(`Function: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const hi5 = function () {
  console.log('👋🏻');
};
document.body.addEventListener('click', hi5);

['Ephraim', 'Martha', 'Adam'].forEach(hi5);
