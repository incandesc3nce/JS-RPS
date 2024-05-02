function getComputerChoice() {
  const randomChoice = Math.random();

  if (randomChoice <= 0.33) {
    return "Rock";
  } else if (randomChoice <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

