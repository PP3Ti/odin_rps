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

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();        // get input from both parties
    computerSelection = getComputerChoice(); 

    if(playerSelection == computerSelection){       // create logic
        return "Draw!"
    } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        return "The computer won!"
    } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
        return "The computer won!"
    } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
        return "The computer won!"
    } else {
        return "The player won"
    }
}

console.log(playRound());