'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let result = 1;

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Вы угадали!';
    document.querySelector('.highscore').textContent = result;
  } else if (guessingNumber > secretNumber) {
    document.querySelector('.guess-message').textContent =
      'Число слишком большое';
    score--;
    result++;
    document.querySelector('.score').textContent = score;
  } else if (guessingNumber < secretNumber) {
    document.querySelector('.guess-message').textContent =
      'Число слишком маленькое';
    score--;
    result++;
    document.querySelector('.score').textContent = score;
  }
});
