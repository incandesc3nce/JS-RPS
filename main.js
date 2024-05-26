const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let roundsPlayed = 0;

rockButton.addEventListener('click', () => {
    const humanChoice = 'rock';
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);
    updatePicks(humanChoice, computerChoice);
    updateResultText(humanChoice, computerChoice, result);
    updateScore(result);

    roundsPlayed += 1;
    checkRoundsPlayed(roundsPlayed);
})
paperButton.addEventListener('click', () => {
    const humanChoice = 'paper';
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);
    updatePicks(humanChoice, computerChoice);
    updateResultText(humanChoice, computerChoice, result);
    updateScore(result);

    roundsPlayed += 1;
    checkRoundsPlayed(roundsPlayed);
})
scissorsButton.addEventListener('click', () => {
    const humanChoice = 'scissors';
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);
    updatePicks(humanChoice, computerChoice);
    updateResultText(humanChoice, computerChoice, result);
    updateScore(result);

    roundsPlayed += 1;
    checkRoundsPlayed(roundsPlayed);
})

function getComputerChoice() {
  const randomChoice = Math.random();

  if (randomChoice <= 0.33) {
    return "rock";
  } else if (randomChoice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
    let alertMessage = ``;
    let humanWon = undefined;
    
    if (humanChoice === computerChoice) {
        return undefined;
    } else if ( 
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        humanWon = false;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanWon = true;
    }
    
    return humanWon;
}

function updatePicks(humanPick, computerPick) {
    const human = document.querySelector("#human_pick");
    const computer = document.querySelector("#comp_pick");

    human.textContent = capitalizeFirstLetter(humanPick);
    computer.textContent = capitalizeFirstLetter(computerPick);
}

function updateScore(humanWon) {
    const humanScore = document.querySelector("#human_score");
    const computerScore = document.querySelector("#comp_score");

    if (humanWon) {
        const score = parseInt(humanScore.textContent);
        humanScore.textContent = score + 1; 
    } else if (humanWon == false) {
        const score = parseInt(computerScore.textContent);
        computerScore.textContent = score + 1;
    } else {
        return;
    }
}

function updateResultText(humanPick, computerPick, humanWon) {
    const resultContainer = document.querySelector("#result");
    let resultText = "";
    if (humanWon) {
        resultText = `You Won! ${capitalizeFirstLetter(humanPick)} beats ${capitalizeFirstLetter(computerPick)}.`
    } else if (humanWon == false) {
        resultText = `You Lost! ${capitalizeFirstLetter(computerPick)} beats ${capitalizeFirstLetter(humanPick)}.`
    } else {
        resultText = `Draw!`;
    }

    resultContainer.textContent = resultText;
}

function checkRoundsPlayed(rounds) {
    if (rounds == 5) {
        endGame();
        restart()
        roundsPlayed = 0;
    }
}

function endGame() {
    const humanScore = parseInt(document.querySelector("#human_score").textContent);
    const computerScore = parseInt(document.querySelector("#comp_score").textContent);

    let message = "";

    if (humanScore > computerScore) {
        message = "Match ended with your victory!"
    } else if (humanScore < computerScore) {
        message = "Match ended with Computer's victory."
    } else {
        message = "Match ended with draw."
    }
    message += ` Final score is ${humanScore} : ${computerScore}`

    document.querySelector("#result").textContent = message
}

function restart() {
    document.querySelector("#human_pick").textContent = '';
    document.querySelector("#comp_pick").textContent = '';

    document.querySelector("#human_score").textContent = 0;
    document.querySelector("#comp_score").textContent = 0;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
