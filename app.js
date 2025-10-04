let choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * choices.length);
    console.log(computerChoice);

    if (computerChoice == 0){
        console.log("rock");
        return "rock";
    }

    else if (computerChoice == 1){
        console.log("paper");
        return "paper";
    }

    else {
        console.log("scissors");
        return "scissors";
    }

}

getComputerChoice();