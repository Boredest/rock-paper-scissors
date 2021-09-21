
let playerScore = 0
let computerScore = 0;
let roundsPlayed = 0;
let gameLimit = 5;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const totalScore = document.getElementById("Score");
let playerScore = document.getElementById("playerScore");
totalScore.textContent = playerScore + " - " + computerScore;


//const computerSelection = computerPlay();
let playerSelection = "";
const computerSelection = computerPlay();

function playerChoice() {
    paperButton.addEventListener("click", function () {
        playerSelection = "paper";
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);

    });

    rockButton.addEventListener("click", function () {
        playerSelection = "rock";
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);

    });

    scissorsButton.addEventListener("click", function () {
        playerSelection = "scissors";
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);

    });
}



function game() {
    playerChoice();

}


function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * computerChoice.length);

    if (randomChoice === 0) {
        return "Rock";
    }
    else if (randomChoice == 1) {
        return "Paper";
    }

    else if (randomChoice == 2) {
        return "Scissors";
    }
}




function playRound(playerSelection, computerSelection) {
    //play a round

    if (playerSelection === computerSelection.toLowerCase()) {
        roundsPlayed++;
        return "It's a tie!";
    }

    else if (playerSelection === "rock" && computerSelection === "Paper") {
        roundsPlayed++;
        computerScore++;
        return "YOu Lose";
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        roundsPlayed++;
        return "YOu Lose";
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        roundsPlayed++;
        return "YOu Lose";
    }

    else if (computerSelection === "Rock" && playerSelection == "paper") {
        roundsPlayed++;
        playerScore++;
        return "You Win!"
    }

    else if (computerSelection === "Paper" && playerSelection === "scissors") {
        roundsPlayed++;
        playerScore++;
        return "You Win!"
    }

    else if (computerSelection === "Scissors" && playerSelection === "rock") {
        roundsPlayed++;
        playerScore++;
        return "You Win!"

    }

}






game();



