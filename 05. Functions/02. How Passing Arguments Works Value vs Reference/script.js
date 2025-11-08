'use strict';

// Passing arguments as value vs reference
const flight = 'LH234';
const eph = {
  name: 'Ephraim S',
  passport: 531231123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 531231123) {
    console.log('Check in');
  } else {
    console.log('Wrong passport');
  }
};

/* checkIn(flight, eph);
console.log(flight);
console.log(eph);
 */
const flightNum = flight;
const passenger = eph;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(eph);
console.log(eph);
checkIn(flight, eph);
