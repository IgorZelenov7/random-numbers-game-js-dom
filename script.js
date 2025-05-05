'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  }
});
