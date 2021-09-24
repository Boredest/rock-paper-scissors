
let playerScore = 0;
let computerScore = 0;
let gameLimit = 5;
let playerSelection = "";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const totalScore = document.getElementById("Score");
const playerText = document.getElementById("playerScore");
const aiText = document.getElementById("computerScore");
const displayWinner = document.getElementById("totalHeader");

function game() {
    playerChoice();
}

function playerChoice() {


    paperButton.addEventListener("click", function () {
        let computerSelection = computerPlay();
        playerSelection = "paper";
        playRound(playerSelection, computerSelection);

    });

    rockButton.addEventListener("click", function () {
        let computerSelection = computerPlay();
        playerSelection = "rock";
        playRound(playerSelection, computerSelection);

    });

    scissorsButton.addEventListener("click", function () {
        let computerSelection = computerPlay();
        playerSelection = "scissors";
        playRound(playerSelection, computerSelection);

    });
}


function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
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

    if (playerSelection === computerSelection.toLowerCase()) {
        displayWinner.textContent = "Tie!";


    }

    else if (playerSelection === "rock" && computerSelection === "Paper") {

        computerScore++;
        updateScoreUI();
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {

        computerScore++;
        updateScoreUI();
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock") {

        computerScore++;
        updateScoreUI();
    }

    else if (computerSelection === "Rock" && playerSelection == "paper") {
        playerScore++;
        updateScoreUI();
    }

    else if (computerSelection === "Paper" && playerSelection === "scissors") {
        playerScore++;
        updateScoreUI();


    }

    else if (computerSelection === "Scissors" && playerSelection === "rock") {
        playerScore++;
        updateScoreUI();


    }

}

function updateScoreUI() {
    displayWinner.textContent = "Score Total";
    playerText.textContent = playerScore;
    aiText.textContent = computerScore;
    totalScore.textContent = playerScore + " - " + computerScore;


    if (playerScore == gameLimit || computerScore == gameLimit) {
        if (playerScore > computerScore) {
            displayWinner.textContent = " You Win!";
            setTimeout(resetGame, 800);

        }

        else {
            displayWinner.textContent = " You Lose!";
            setTimeout(resetGame, 800);

        }


    }
}



function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayWinner.textContent = " Score Total ";
    playerText.textContent = playerScore;
    aiText.textContent = computerScore;
    totalScore.textContent = playerScore + " - " + computerScore;

}


game();











