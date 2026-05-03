let choices = ["rock", "paper", "scissors"];

const scoreLimit = 5;

let playedRounds = 0;

let playerScore = 0;
let computerScore = 0;

let gameOver = false;

let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");

const winnerText = document.querySelector(".winner-text");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * choices.length);

  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  if (humanChoice == computerChoice) {
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    playerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    playerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    playerScore++;
  }
  else{
    computerScore++;
  }
  
  updateScoreDisplay();

  if (playerScore === scoreLimit || computerScore === scoreLimit) {
    showWinner();
    resetGame();
  }
}

function showWinner(){
if(playerScore > computerScore){
  winnerText.textContent = "Player wins the game!";
}
  else if (computerScore > playerScore){
    winnerText.textContent = "Computer wins the game!";
  }

  else if (playerScore === computerScore){
    winnerText.textContent = "Tie game.";
  }

}


function updateScoreDisplay() {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function resetGame() {
  console.log("Resetting game...");
  playerScore = 0;
  computerScore = 0;
  playedRounds = 0;
  gameOver = false;
  updateScoreDisplay();
  

}
const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) return;
  const playerChoice = clickedButton.id.toLowerCase();

  switch (playerChoice) {
    case "rock":
      playRound(playerChoice, getComputerChoice());
      break;

    case "paper":
      
      playRound(playerChoice, getComputerChoice());
      break;
    case "scissors":
      playRound(playerChoice, getComputerChoice());
      break;
  }
});

