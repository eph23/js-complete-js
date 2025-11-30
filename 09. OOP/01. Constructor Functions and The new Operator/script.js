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
