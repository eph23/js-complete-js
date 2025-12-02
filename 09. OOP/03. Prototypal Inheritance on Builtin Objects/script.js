'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  /* this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }; */
};

const eph = new Person('Ephraim', 1988);
console.log(eph);

const matilda = new Person('Matilda', 2017);
console.log(matilda);
const jack = new Person('Jack', 1975);
console.log(jack);

const jay = 'Jay';

console.log(eph instanceof Person);
console.log(jay instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

eph.calcAge();
matilda.calcAge();

console.log(eph.__proto__);
console.log(eph.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(eph));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(eph.species);
console.log(matilda.species);

console.log(eph.hasOwnProperty('firstName'));
console.log(eph.hasOwnProperty('species'));

console.log(eph.__proto__);
console.log(eph.__proto__.__proto__);
console.log(eph.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
