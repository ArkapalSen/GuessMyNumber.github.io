"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

const msgContent = function (message) {
  document.querySelector(".message").textContent = message;
};

const bgcolor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector('.message').textContent = ' ⛔ No Number Entered!!'
    msgContent(" ⛔ No Number Entered!!");
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Congratulations! Correct Number'
    msgContent("Congratulations! Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    let highscore = document.querySelector(".highscore").textContent;
    if (highscore <= score) {
      document.querySelector(".highscore").textContent = score;
    }
    bgcolor("#60b347");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess<secretNumber ? 'Too Low Guess!' : 'Too High Guess!';
      msgContent(guess < secretNumber ? "Too Low Guess!" : "Too High Guess!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Game over! You Lost';
      msgContent("Game over! You Lost");
      document.querySelector(".score").textContent = 0;
      bgcolor("#db2a2a");
    }
  }
  // else if(guess<secretNumber){
  //     if(score>1){
  //         document.querySelector('.message').textContent = 'Too Low Guess!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else{
  //         document.querySelector('.message').textContent = 'Game over! You Lost';
  //         document.querySelector('.score').textContent = 0;
  //     }
  // }
  // else if(guess>secretNumber){
  //     if(score>1){
  //         document.querySelector('.message').textContent = 'Too High Guess!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else{
  //         document.querySelector('.message').textContent = 'Game over! You Lost';
  //         document.querySelector('.score').textContent = 0;
  //     }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".guess").value = "";
  // document.querySelector('.message').textContent='Start Guessing..';
  msgContent("Start Guessing..");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  bgcolor("#222");
});
