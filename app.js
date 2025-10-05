let choices = ["rock", "paper", "scissors"];

let humanScore,
  computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * choices.length);
  console.log(computerChoice);

  if (computerChoice == 0) {
  
    return "rock";
  } else if (computerChoice == 1) {
    
    return "paper";
  } else {
    
    return "scissors";
  }
}

function getHumanChoice() {

  let humnanChoice = prompt("Please enter your choice.").toLowerCase();

  return humnanChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  
    console.log(humanChoice, computerChoice);

    if(humanChoice == computerChoice ){
        console.log("Tie !");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("Player wins this round. ");
        humanScore++;
    }

    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("Player wins this round. ");
        humanScore++;
    }

    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("Player wins this round. ");
        humanScore++;
    }

    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("Computer wins this round. ");
        computerScore++;
    }

    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("Computer wins this round. ");
        computerScore++;
    }

    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Computer wins this round. ");
        computerScore++;
    }
  
}

playRound(humanSelection, computerSelection);

