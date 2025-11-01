'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring Arrays
const arr = [2, 3, 4];
console.log(arr);

const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

const [first, second] = restaurant.categories;
console.log(first);
console.log(second);

// Skipping elements
let [primary, , secondary] = restaurant.categories;
console.log(primary);
console.log(secondary);

// Switching values
[primary, secondary] = [secondary, primary];
console.log(primary);
console.log(secondary);

// Returned value
console.log(restaurant.order(2, 0));
const [starterMenu, mainMenu] = restaurant.order(2, 0);
console.log(starterMenu);
console.log(mainMenu);

// Nested array
const nestedArr = [2, 4, [6, 7]];
const [i, , j] = nestedArr;
console.log(i);
console.log(j);

const [p, , [q, r]] = nestedArr;
console.log(p);
console.log(q);
console.log(r);

// Default values
const [m = 1, n = 2, o = 3] = [8, 9];
console.log(m);
console.log(n);
console.log(o);
