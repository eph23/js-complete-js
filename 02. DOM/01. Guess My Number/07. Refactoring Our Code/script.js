'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highScore;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No guess
  if (!guess) {
    displayMessage('NO NUMBER 🚫');
  }

  // When player Wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number ✅');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').disabled = true;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 🤣🤣🤣');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
