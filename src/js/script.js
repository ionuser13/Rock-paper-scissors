const main = document.querySelector("main");
const results = document.createElement("div");
results.className = "final-results";

const rockButton = document.createElement("button");
rockButton.innerHTML = '<i class="fa-solid fa-hand-fist"></i>';

const paperButton = document.createElement("button");
paperButton.innerHTML = '<i class="fa-solid fa-hand"></i>';

const scissorsButton = document.createElement("button");
scissorsButton.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';

const restartButton = document.createElement("button");
restartButton.innerText = "Restart";
restartButton.className = "none";

const currentScore = document.createElement("div");
currentScore.innerHTML = "Make your choice";


const values = ["rock", "paper", "scissors"];
let computerChoice;
let playerSelection;

function getComputerChoice(){
    computerChoice = values[Math.ceil(Math.random()*3) - 1];
    return computerChoice;
}

function disableButtons() {
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
    restartButton.classList.remove("none");
}


let computer = getComputerChoice();
let userCount = 0;
let computerCount = 0;
let numberOfGames = 0;

function restart() {
    restartButton.classList.add("none");
    rockButton.disabled = false;
    scissorsButton.disabled = false;
    paperButton.disabled = false;
}

function printingScore(container, score) {
    container.innerText = JSON.stringify(score)
}

const playerScore = document.createElement("div");
playerScore.innerText = JSON.stringify(userCount);
const computerScore = document.createElement("div");
computerScore.innerText = JSON.stringify(computerCount); 

const currentScoreContainer = document.querySelector(".current-score");
const scoresContainer = document.querySelector(".scores");
const optionsContainer = document.querySelector(".options");
const endmatchContainer = document.querySelector(".end-match")

currentScoreContainer.append(currentScore);
scoresContainer.append(playerScore, computerScore);
optionsContainer.append(rockButton, paperButton, scissorsButton)
main.append(currentScoreContainer, scoresContainer, optionsContainer, endmatchContainer)
// main.append(results, restartButton)

//console.log(check(playerSelection));
//checks if the user choice is equal to any of the possible values
function playRound(playerSelection){
    if ((playerSelection === values[0] && computer === values[2]) || (playerSelection === values[1] && computer === values[0]) || (playerSelection === values[2] && computer === values[1])){
        currentScore.innerHTML = `<h2>You win!</h2><p>${playerSelection} beats ${computer}</p>`;
        console.log(`You win! ${playerSelection} beats ${computer}`);
        console.log(computer);
        computer = getComputerChoice();
        userCount = userCount + 1;
        printingScore(playerScore, userCount);
        if(userCount === 5) {
            results.innerText = "You won the game!!";
            disableButtons();
        };
        console.log(userCount)
    }
    else if ((playerSelection === values[0] && computer === values[1]) ||(playerSelection === values[1] && computer === values[2]) || (playerSelection === values[2] && computer === values[0])) {
        currentScore.innerHTML = `<h2>You lose!</h2><p>${computer} beats ${playerSelection}</p>`;
        console.log(`You lose! ${computer} beats ${playerSelection}`);
        console.log(computer);
        computer = getComputerChoice();
        computerCount = computerCount + 1; 
        printingScore(computerScore, computerCount)
        if(computerCount === 5){
            results.innerText = "You lost the game!";
            disableButtons();
        }
        console.log(computerCount);
        //return computerCount
    }
    else if (playerSelection === computer){
        currentScore.innerHTML = "<h2>It's a tie!!</h2>";
        console.log(computer);
        computer = getComputerChoice();
        currentScore.innerText = "It's a tie!!";
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
restartButton.addEventListener("click", () => {
    restart();
    userCount = 0;
    computerCount = 0;
    printingScore(playerScore, userCount);
    printingScore(computerScore, computerCount)
    currentScore.innerText = "Make your choice";
    results.innerText = "";
})