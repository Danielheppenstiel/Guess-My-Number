('use strict');

let scoreDisplay = document.querySelector('.score');
let highScoreDisplay = document.querySelector('.high-score');
let numberDisplay = document.querySelector('.number');

let score = 20;
let highScore = 0;

let randomNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const playerGuess = Number(document.querySelector('.guess').value);
  console.log(playerGuess, typeof playerGuess);

  if (!playerGuess) {
    displayMessage(`❌ Please Enter a Number`);
  } else if (playerGuess !== randomNumber) {
    if (score > 1) {
      displayMessage(playerGuess > randomNumber ? 'To High!!' : 'To Low..');
      score--;
      scoreDisplay.textContent = score;
    } else {
      scoreDisplay.textContent = 0;
      displayMessage(`You've Lost The Game ❌`);
    }
  } else if (playerGuess === randomNumber) {
    displayMessage(`Correct Number 👏🏻 👏🏻`);
    numberDisplay.textContent = randomNumber;
    numberDisplay.style.width = '20rem';

    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  numberDisplay.textContent = '?';
  numberDisplay.style.width = '10rem';
  scoreDisplay.textContent = 20;
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
});
