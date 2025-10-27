'use strict';

let score = 20;
document.querySelector('.score').textContent = score;

const secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber; //TODO: remove
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER 🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number ✅';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 🤣🤣🤣';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 🤣🤣🤣';
      document.querySelector('.score').textContent = 0;
    }
  }
});
