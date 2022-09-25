const values = ["rock", "paper", "scissors"];
//obtains the player moves
//checks if the user choice is equal to any of the possible values
//console.log(playerSelection)
let computerChoice;
//console.log(computerChoice)
function getComputerChoice(){
    computerChoice = values[Math.ceil(Math.random()*3) - 1];
    return computerChoice;
    //randomly returns a value from possible-values
    //search previous cide to pick one of th ethree
}
let computerSelection = getComputerChoice();
let userCount = 0;
let computerCount = 0;
//console.log(check(playerSelection));
function playRound(playerSelection, computerSelection){
    if (playerSelection === values[0] && computerSelection === values[2] || playerSelection === values[1] && computerSelection === values[0] || playerSelection === values[2] && computerSelection === values[1]){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        userCount = userCount + 1;
        if(userCount === 5) {
            console.log("You won the game!!");
        };
        //console.log(userCount)
    }
    else if (playerSelection === values[0] && computerSelection === values[1] || playerSelection === values[1] && computerSelection === values[2] || playerSelection === values[2] && computerSelection === values[0]) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerCount = computerCount + 1;
        if(computerCount === 5){
            console.log("You lost the game!")
        }
        //console.log(computerCount);
        //return computerCount
    }
    else if (playerSelection === computerSelection){
        console.log("It's a tie!!")
    }
    else {
    console.log("Please enter a valid value.")
    }
    return userCount
}
//let actualResult = playRound(playerSelection, computerSelection);
//console.log(actualResult)
//let newResult = actualResult;
function game(totalRounds = 5){
    let playedRounds = 0;
    let userPoints = 0;
    
    while (playedRounds < totalRounds) {
        let playerSelection = prompt("What is your move?: rock, paper or scissors?", "").toLowerCase();
        playRound(playerSelection, computerSelection);
        userPoints += playRound(playerSelection, computerSelection);
        playedRounds++;
    }
}
console.log(game())