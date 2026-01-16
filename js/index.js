const CHOICES = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    while (!CHOICES.includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}