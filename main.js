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

function getHumanChoice() {
    while (true) { 
        let choice = prompt('Select one: "Rock", "Paper" or "Scissors"', '');

        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;
        } else {
            alert('Incorrect option! Choose one of the three.');
        }
    }
}


function getFinalMessage(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return finalMessage = `Match ended with your victory! Congratulations!\n\nScore:\nYou: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanScore < computerScore) {
        return finalMessage = `Match ended with Computer's victory. :c \n\nScore:\nYou: ${humanScore} | Computer: ${computerScore}`;
    } else {
        return finalMessage = `Match ended with draw. \n\nScore:\nYou: ${humanScore} | Computer: ${computerScore}`
    }
}

function playRound(humanChoice, computerChoice) {
    let alertMessage = ``;
    let humanWon = undefined;
    
    if (humanChoice === computerChoice) {
        return humanWon;
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        const computerChoice = getComputerChoice().toLowerCase();
        const humanChoice = getHumanChoice().toLowerCase();

        const humanWon = playRound(humanChoice, computerChoice);

        let alertMessage;

        if (humanWon === true) {
            humanScore += 1;
            alertMessage = `You Won! ${humanChoice} beats ${computerChoice}. \n\n Score:\nYou: ${humanScore} | Computer: ${computerScore}`;
        } else if (humanWon === false) {
            computerScore += 1;
            alertMessage = `You Lost! ${computerChoice} beats ${humanChoice}. \n\n Score:\nYou: ${humanScore} | Computer: ${computerScore}`;
        } else {
            alertMessage = `Draw! \n\nScore:\nYou: ${humanScore} | Computer: ${computerScore}`;
        }

        alert(alertMessage);
        roundsPlayed += 1;
    }

    let finalMessage = getFinalMessage(humanScore, computerScore);


    alert(finalMessage);
}

while (true) {
    playGame();

    let restartChoice = confirm('Press "OK" to restart.');
    if (restartChoice === false) break;
}

