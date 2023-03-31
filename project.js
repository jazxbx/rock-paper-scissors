'strict';

const playerSelection = prompt('Choose rock, paper, or scissors');

function playRound(playerSelection, getComputerChoice) {
  if (playerSelection == 'rock' && getComputerChoice == 'rock') {
    return 'tie';
  } else if (playerSelection == 'rock' && getComputerChoice == 'paper') {
    return 'computer wins';
  } else if (playerSelection == 'rock' && getComputerChoice == 'scissors') {
    return 'player wins';
  } else if (playerSelection == 'paper' && getComputerChoice == 'paper') {
    return 'tie';
  } else if (playerSelection == 'paper' && getComputerChoice == 'scissors') {
    return 'computer wins';
  } else if (playerSelection == 'paper' && getComputerChoice == 'rock') {
    return 'player wins';
  } else if (playerSelection == 'scissors' && getComputerChoice == 'scissors') {
    return 'tie';
  } else if (playerSelection == 'scissors' && getComputerChoice == 'rock') {
    return 'computer wins';
  } else if (playerSelection == 'scissors' && getComputerChoice == 'paper') {
    return 'player wins';
  } else {
    return 'try again';
  }
}
console.log(
  ` Player chose ${playerSelection} and Computer chose ${getComputerChoice}!  ${playRound(
    playerSelection,
    getComputerChoice
  )}`
);
// console.log( `Player chose ${playerSelection}, Computer chose ${getComputerChoice} (playRound(playerSelection, getComputerChoice`));

// Random generated response by computer

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  const random = Math.floor(Math.random() * choices.length);
  return choices[random];

  // return this[Math.floor(Math.random() * this.length)];
}

// console.log(getComputerChoice());
