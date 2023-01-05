const body = document.querySelector("body");
const results = document.createElement("div");
results.classList.add = "results";
// results.innerText = "";
const rockButton = document.createElement("button");
rockButton.innerText = "Rock"
const paperButton = document.createElement("button");
paperButton.innerText = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.innerText = "scissor";
const currentScore = document.createElement("div");
// currentScore.innerText = "";

const values = ["rock", "paper", "scissors"];
//obtains the player moves
let computerChoice;
let playerSelection;
//console.log(computerChoice)
function getComputerChoice(){
    computerChoice = values[Math.ceil(Math.random()*3) - 1];
    return computerChoice;
    //randomly returns a value from possible-values
    //search previous cide to pick one of th ethree
}
let computer = getComputerChoice();
let userCount = 0;
let computerCount = 0;
const playerScore = document.createElement("div");
playerScore.innerText = JSON.stringify(userCount);
const computerScore = document.createElement("div");
computerScore.innerText = JSON.stringify(computerCount); 


body.append(currentScore, rockButton, paperButton, scissorsButton, playerScore, computerScore, results)

//console.log(check(playerSelection));
//checks if the user choice is equal to any of the possible values
function playRound(playerSelection){
    if ((playerSelection === values[0] && computer === values[2]) || (playerSelection === values[1] && computer === values[0]) || (playerSelection === values[2] && computer === values[1])){
        currentScore.innerText = `You win! ${playerSelection} beats ${computer}`;
        console.log(`You win! ${playerSelection} beats ${computer}`);
        console.log(computer);
        computer = getComputerChoice();
        userCount = userCount + 1;
        playerScore.innerText = JSON.stringify(userCount)
        if(userCount === 5) {
            results.innerText = "You won the game!!"
        };
        console.log(userCount)
    }
    else if ((playerSelection === values[0] && computer === values[1]) ||(playerSelection === values[1] && computer === values[2]) || (playerSelection === values[2] && computer === values[0])) {
        currentScore.innerText = `You lose! ${computer} beats ${playerSelection}`;
        console.log(`You lose! ${computer} beats ${playerSelection}`);
        console.log(computer);
        computer = getComputerChoice();
        computerCount = computerCount + 1; 
        computerScore.innerText = JSON.stringify(computerCount)
        if(computerCount === 5){
            results.innerText = "You lost the game!"
        }
        console.log(computerCount);
        //return computerCount
    }
    else if (playerSelection === computer){
        currentScore.innerText = "It's a tie!!";
        console.log(computer);
        computer = getComputerChoice();
        currentScore.innerText = "It's a tie!!";
        results.innerText = "It's a tie!!";
    }
    return userCount
}
rockButton.addEventListener("click", () => {
    playRound("rock", computer);
})
paperButton.addEventListener("click", () => {
    playRound("paper", computer);
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors", computer);
})


// function game(totalRounds = 5){
//     let playedRounds = 0;
//     let userPoints = 0;
    
//     while (playedRounds < totalRounds) {
//         let playerSelection = prompt("What is your move?: rock, paper or scissors?", "").toLowerCase();
//         playRound();
//         userPoints += playRound(playerSelection, computer);
//         playedRounds++;
//     }
// }