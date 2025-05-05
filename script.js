'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let result = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Вы угадали!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.question').style.backgroundColor = 'green';
    document.querySelector('header').style.borderBottom = '7px solid green';
    document.querySelector('h1').textContent = 'Победа!';
    document.querySelector('h1').style.fontSize = '6rem';

    if (score > result) {
      result = score;
      document.querySelector('.highscore').textContent = result;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        guessingNumber > secretNumber
          ? 'Число слишком большое'
          : 'Число слишком маленькое';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Игра окончена.';
      document.querySelector('.score').textContent = score - 1;
    }
  // } else if (guessingNumber > secretNumber) {
  //   // if (score > 1) {
  //   //   document.querySelector('.guess-message').textContent =
  //   //     'Число слишком большое';
  //   //   score--;
  //   //   document.querySelector('.score').textContent = score;
  //   // } else {
  //   //   document.querySelector('.guess-message').textContent = 'Игра окончена.';
  //   //   document.querySelector('.score').textContent = score - 1;
  //   }
  // } else if (guessingNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent =
  //       'Число слишком маленькое';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Игра окончена.';
  //     document.querySelector('.score').textContent = score - 1;
  //   }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.backgroundColor = 'white';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('h1').textContent = 'Угадай Число!';
  document.querySelector('h1').style.fontSize = '3rem';
  document.querySelector('header').style.borderBottom = '7px solid #fff';
  document.querySelector('.number-input').value = '';
});
