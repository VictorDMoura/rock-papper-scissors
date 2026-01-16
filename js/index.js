const CHOICES = ['rock', 'papper', 'scissors'];
const WINNING_COMBOS = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'papper'
};

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, papper, scissors):").toLowerCase();
    while (!CHOICES.includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, papper, or scissors:").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie");
        return;        
    } else if (WINNING_COMBOS[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return;
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return;
    }
}

function playGame(){
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}\n`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("The game ended in a tie!");
    }
}

playGame();