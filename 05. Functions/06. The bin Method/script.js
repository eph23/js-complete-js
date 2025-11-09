'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Ephraim S');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// The call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 583, 'Mary cooper');
console.log(swiss);

// Apply Method
const flightData = [583, 'George cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(eurowings, ...flightData);
console.log(eurowings);

// the bind method
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ephraim S');
bookEW23('Martha Cooper');
console.log(eurowings);

// With EVent listener
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Exercise
const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
