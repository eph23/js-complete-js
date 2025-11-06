'use strict';

// Working with arrays
const airline = 'Bangladesh Biman';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'ePHraiM';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@ephraim.io';
const loginEmail = '   Hello@Ephraim.IO \n';

const correctedEmail = loginEmail.trim().toLowerCase();
console.log(correctedEmail);

console.log(email === correctedEmail);

const priceGB = '288,297$';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`Part of the new Airbus family`);
}

const checkBaggage = function (items) {
  let baggage = items.toLowerCase().trim();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};
checkBaggage(`I have a laptop, some foods and a pocket knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun`);
