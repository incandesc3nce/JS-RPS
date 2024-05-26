const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    console.log(result);
})
paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    console.log(result);
})
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    console.log(result);
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



