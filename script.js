'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let result = 1;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);

  document.querySelector('.again').addEventListener('click', () => {
    location.reload();
  });

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Вы угадали!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.highscore').textContent = result;
    document.querySelector('.question').style.backgroundColor = 'green';
    document.querySelector('header').style.borderBottom = '7px solid green';
    document.querySelector('h1').textContent = 'Победа!';
    document.querySelector('h1').style.fontSize = '6rem';
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
