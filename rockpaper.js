let gameLength = document.cookie;
let body = document.querySelector("body");
let playerChoice;
let computerChoice;
let playerScore = 0;        // create variables for the score
let computerScore = 0;
let drawScore = 0;          //create draw counter for debugging

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

if (body.classList.contains("start")) {                     //check for starting page
    const playButton = document.getElementById("play");              //play button starts the game                   
    playButton.addEventListener("click", startGame);                
} 
if (body.classList.contains("game")) {                      // back button function on game page
    const back = document.getElementById("back");
    back.addEventListener("click", function(){
    window.location.href = "./index.html"
})}

function startGame(){                                           //set game length, go to game page
    const lengthInput = document.getElementById("turns");
    gameLength = lengthInput.value;
    document.cookie = gameLength;
    window.location.href = "./game.html";
}

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3); // generate number between 0 and 2
    if (choice == 0){ 
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    } 
}

/*function getPlayerChoice() {                              // refactored prompt version

    let selection = prompt("Enter your choice");  // get choice from prompt
    selection = selection.toLowerCase();    // decapitalize input

    while(1){
        switch (selection) {                         //force valid input from user
            case 'rock' : return selection; break;
            case 'paper': return selection; break;
            case 'scissors': return selection; break;
            default : selection = prompt("Please choose a valid tool");
        }
    }
}*/

function playRound() {

    computerChoice = getComputerChoice(); 

    if (playerChoice == computerChoice){       // create logic, 0 == draw, 1 == computer win, 2  == player win
        return 0
    } else if ((computerChoice == "rock") && (playerChoice == "scissors")) {
        return 1
    } else if ((computerChoice == "paper") && (playerChoice == "rock")) {
        return 1
    } else if ((computerChoice == "scissors") && (playerChoice == "paper")) {
        return 1
    } else {
        return 2
    }
}
function calculateScore(){
    switch (result) {
        case 1 : computerScore++; break;
        case 2 : playerScore++; break;
        default : drawScore++; break;
    }
    console.log(playerScore, computerScore, drawScore) // check score for debuging
}
function updateScore(){
    const playerScoreDisplayed = document.getElementById("playerScore");
    const computerScoreDisplayed = document.getElementById("computerScore");
    const playerChoiceDisplayed = document.getElementById("playerChoice");
    const computerChoiceDisplayed = document.getElementById("computerChoice");

    playerScoreDisplayed.textContent = playerScore;
    computerScoreDisplayed.textContent = computerScore;
    playerChoiceDisplayed.textContent = playerChoice;
    computerChoiceDisplayed.textContent = computerChoice;

}
/*function playGame() {           //refactored prompt version

    let playerScore = 0;        // create variables for the score
    let computerScore = 0;
    let drawScore = 0;          //create draw counter for debugging
    let result = 0;

    for (i = 0; i < gameLength; i++) {
        result = playRound();
        switch (result) {
            case 1 : computerScore++; break;
            case 2 : playerScore++; break;
            default : drawScore++; break;
        }
    }

    console.log(playerScore, computerScore, drawScore) // check score for debuging
    
    if (playerScore > computerScore) {
        return "The player won!"
    } else if (computerScore > playerScore) {
        return "The computer won!"
    } else {
        return "Draw!"
    }
}*/

function finishGame(){

    const winner = document.getElementById("winner");
    if (playerScore > computerScore){
        winner.textContent = "You won!";
    } else {
        winner.textContent = "The computer won!";
    }

    function blockButtons(){
        const buttons = document.querySelectorAll("button");            // block buttons after game finished
        buttons.forEach(element => {                    
            element.classList.add("blockClicks")
        });
        const backButton = document.getElementById("back");
        backButton.classList.remove("blockClicks");
    }  

    function playAgain(){
        const playAgain = document.getElementById("playAgain");
        playAgain.innerHTML = '<button id="play" class="button">Play again!</button>';
        const playButton = document.getElementById("play");
        playButton.addEventListener("click", function(){
            gameLength = 0;
            window.location.href = './index.html';
        })
    }
    blockButtons();
    playAgain();
}

function playGame(){                    //compare choices, calculate and update scores
    result = playRound(); 
    calculateScore();   
    updateScore();

    if((playerScore == gameLength) || (computerScore == gameLength)){     // check if game ended
        finishGame();
    }
}

if(body.classList.contains("game")){
    rock.addEventListener("click", function(){              //player clicks rock
        playerChoice = "rock";
        playGame();
    })
    paper.addEventListener("click", function(){              //player clicks paper
        playerChoice = "paper";
        playGame();
    })
    scissors.addEventListener("click", function(){              //player clicks scissors
        playerChoice = "scissors";
        playGame();
    })
}