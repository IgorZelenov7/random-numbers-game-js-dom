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
    document.querySelector('.question').style.backgroundColor = 'green';
    document.querySelector('header').style.borderBottom = '7px solid green';
    document.querySelector('h1').textContent = 'Победа!'
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        'Число слишком большое';
      score--;
      result++;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена.';
      document.querySelector('.score').textContent = score - 1;
    }
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        'Число слишком маленькое';
      score--;
      result++;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена.';
      document.querySelector('.score').textContent = score - 1;
    }
  }
});
