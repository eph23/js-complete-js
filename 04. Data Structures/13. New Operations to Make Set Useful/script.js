'use strict';

// Data needed for first part of the section
const weekDays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Enhanced Object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Your order will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// Sets

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);
console.log(italianFoods);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
console.log(mexicanFoods);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian:', uniqueItalianFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican:', uniqueMexicanFoods);

const uniqueItalianMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFoods);
