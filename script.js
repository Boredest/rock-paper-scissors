let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameLimit = 5;


function game(){
    //loop for 5 rounds

    while(roundsPlayed < gameLimit){
        const computerSelection = computerPlay();
        const playerSelection = playerChoice();
        
       playRound(playerSelection,computerSelection);
        //console.log(computerScore);
        console.log(roundsPlayed);
       
    }
   
}

function computerPlay(){
    const computerChoice = ["Rock","Paper","Scissors"];
    let randomChoice = Math.floor(Math.random()*computerChoice.length);

    if(randomChoice === 0){
        return "Rock";
    }
    else if(randomChoice == 1){
        return "Paper";
    } 

    else if(randomChoice == 2){
        return "Scissors";
    }
}

function playerChoice() {
    return prompt("Rock, Paper, or Scissors").toLowerCase();
}



function playRound(playerSelection, computerSelection){
    //play a round

 if(playerSelection === computerSelection.toLowerCase()){
     roundsPlayed++;
        return "It's a tie!";
    }

 else if(playerSelection === "rock" && computerSelection === "Paper"){
    roundsPlayed++;
    computerScore++;
     return "YOu Lose";
 }
 else if(playerSelection === "paper" && computerSelection === "Scissors"){
    roundsPlayed++;
     return "YOu Lose";
 }

 else if(playerSelection === "scissors" && computerSelection === "Rock"){
    roundsPlayed++;
    return "YOu Lose";
}

else if(computerSelection === "Rock" && playerSelection == "paper"){
    roundsPlayed++;
    return "You Win!"
}

else if(computerSelection === "Paper" && playerSelection === "scissors"){
    roundsPlayed++;
    return "You Win!"
}

else if(computerSelection === "Scissors" && playerSelection === "rock"){
    roundsPlayed++;
    return "You Win!"
    
}

}

game();








