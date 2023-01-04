const body = document.querySelector("body")
const results = document.createElement("div");
results.classList.add = "results";
results.innerText = "";
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
body.append(results, rockButton, paperButton, scissorsButton)


const values = ["rock", "paper", "scissors"];
//obtains the player moves
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

rockButton.addEventListener("click", () => {
    playRound("rock", computerSelection);
})
paperButton.addEventListener("click", () => {
    playRound("paper", computerSelection);
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors", computerSelection);
})
//console.log(check(playerSelection));
//checks if the user choice is equal to any of the possible values
function playRound(playerSelection, computerSelection){
    if (playerSelection === values[0] && computerSelection === values[2] || playerSelection === values[1] && computerSelection === values[0] || playerSelection === values[2] && computerSelection === values[1]){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        userCount = userCount + 1;
        if(userCount === 5) {
            results.innerText = "You won the game!!"
            console.log("You won the game!!");
        };
        //console.log(userCount)
    }
    else if ((playerSelection === values[0] && computerSelection === values[1]) ||(playerSelection === values[1] && computerSelection === values[2]) || (playerSelection === values[2] && computerSelection === values[0])) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerCount = computerCount + 1;
        if(computerCount === 5){
            results.innerText = "You lost the game!"
            console.log("You lost the game!")
        }
        //console.log(computerCount);
        //return computerCount
    }
    else if (playerSelection === computerSelection){
        results.innerText = "It's a tie!!"
        console.log("It's a tie!!")
    }
    return userCount
}

// function game(totalRounds = 5){
//     let playedRounds = 0;
//     let userPoints = 0;
    
//     while (playedRounds < totalRounds) {
//         let playerSelection = prompt("What is your move?: rock, paper or scissors?", "").toLowerCase();
//         playRound(playerSelection, computerSelection);
//         userPoints += playRound(playerSelection, computerSelection);
//         playedRounds++;
//     }
// }
// console.log(game())