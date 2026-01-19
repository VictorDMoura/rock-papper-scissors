const CHOICES = ['rock', 'paper', 'scissors'];
const WINNING_COMBOS = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

let humanScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const statusEl = document.getElementById('status');
const roundDetailEl = document.getElementById('round-detail');
const choiceButtons = document.querySelectorAll('[data-choice]');
const resetButton = document.getElementById('reset');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function updateScoreboard() {
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
}

function setStatus(message) {
    statusEl.textContent = message;
}

function setRoundDetail(message) {
    roundDetailEl.textContent = message;
}

function isMatchOver() {
    return humanScore >= 5 || computerScore >= 5;
}

function announceWinner() {
    if (humanScore === computerScore) {
        setStatus('The match ended in a tie.');
    } else if (humanScore > computerScore) {
        setStatus('You reached 5 points and win the match!');
    } else {
        setStatus('The computer reached 5 points and wins the match.');
    }

    setRoundDetail('Hit Reset match to play again.');
    choiceButtons.forEach((button) => {
        button.disabled = true;
    });
}

function playRound(humanChoice) {
    if (isMatchOver()) {
        return;
    }

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        setStatus("It's a tie this round.");
        setRoundDetail(`Both picked ${humanChoice}.`);
    } else if (WINNING_COMBOS[humanChoice] === computerChoice) {
        humanScore++;
        setStatus('You win this round!');
        setRoundDetail(`${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        setStatus('Computer wins this round.');
        setRoundDetail(`${computerChoice} beats ${humanChoice}.`);
    }

    updateScoreboard();

    if (isMatchOver()) {
        announceWinner();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreboard();
    setStatus('Choose Rock, Paper, or Scissors to start.');
    setRoundDetail('No rounds played yet.');
    choiceButtons.forEach((button) => {
        button.disabled = false;
    });
}

choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.dataset.choice);
    });
});

resetButton.addEventListener('click', resetGame);
resetGame();