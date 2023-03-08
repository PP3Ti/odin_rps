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

function getPlayerChoice() {

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
}

function playRound() {

    let playerSelection = getPlayerChoice();        // get input from both parties
    let computerSelection = getComputerChoice(); 
    console.log("player: "+ playerSelection + " computer: "+ computerSelection)

    if(playerSelection == computerSelection){       // create logic, 0 == draw, 1 == computer win, 2  == player win
        return 0
    } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        return 1
    } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
        return 1
    } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
        return 1
    } else {
        return 2
    }
}

function game(gameLength) {           // play a game of as many rounds as you want

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
}

console.log(game(5));