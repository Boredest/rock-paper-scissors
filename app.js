let choices = ["rock", "paper", "scissors"];

let roundLimit = 5;

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

function getHumanChoice() {
  //let humanChoice = prompt("Please enter your choice.").toLowerCase();

  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < roundLimit; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  function playRound(humanChoice, computerChoice) {
    console.log("Human " + humanChoice, computerChoice);
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
  }

  calculateScore(humanScore, computerScore);
}

function calculateScore(humanScore, computerScore) {
  if (humanScore == computerScore) {
    console.log("Tie");
  } else {
    console.log(humanScore > computerScore ? "Human Wins!" : "Comp wins.");
  }
}
let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "Rock":
      console.log("Human selected rock");
      break;

    case "Paper":
      console.log("Human selected paper");
      break;

    case "Scissors":
      console.log("Human selected scissors");
      break;
  }
});

//playGame();
