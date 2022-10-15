const playerText = document.querySelector("#player-text");
const computerText = document.querySelector("#computer-text");
const resultText = document.querySelector("#result-text");
const choiceBtns = document.querySelectorAll(".choice-btn");

let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You win!" : "You loose!";
  } else if (player == "PAPER") {
    return player == "SCISSORS" ? "You win!" : "You loose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You win!" : "You loose!";
  }
}
