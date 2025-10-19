let choices = ["rock", "paper", "scissors"];

const roundLimit = 5;

let humanScore = 0;
let computerScore = 0;

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
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
  }
  console.log(humanScore, computerScore);
  // calculateScore(humanScore, computerScore);
}

function calculateScore(humanScore, computerScore) {
  if (humanScore == computerScore) {
    console.log("Tie");
  } else {
    console.log(humanScore > computerScore ? "Human Wins!" : "Comp wins.");
  }
}
const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) return;
  const playerChoice = clickedButton.id.toLowerCase();

  switch (playerChoice) {
    case "rock":
      console.log(playerChoice);
      playRound(playerChoice, getComputerChoice());
      break;

    case "paper":
      console.log(playerChoice);
      playRound(playerChoice, getComputerChoice());
      break;

    case "scissors":
      console.log(playerChoice);
      playRound(playerChoice, getComputerChoice());
      break;
  }
});

//playGame();
