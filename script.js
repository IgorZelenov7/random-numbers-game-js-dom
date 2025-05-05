'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Вы угадали!';
  } else if (guessingNumber > secretNumber) {
    document.querySelector('.guess-message').textContent =
      'Число слишком большое';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessingNumber < secretNumber) {
    document.querySelector('.guess-message').textContent =
      'Число слишком маленькое';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
