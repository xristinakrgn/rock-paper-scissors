let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } 
  else if (randomNum === 1) {
    return "paper";
  } 
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Rock, Paper, or Scissors?");
  return choice.toLowerCase(); 
}

function playRound(humanChoice, computerChoice) {
  const h = humanChoice.toLowerCase();
  const c = computerChoice;

  if (h === c) {
    console.log(`It's a tie! You both chose ${h}.`);
    return "tie";
  }

  const humanWins =
    (h === "rock" && c === "scissors") ||
    (h === "paper" && c === "rock") ||
    (h === "scissors" && c === "paper");

  if (humanWins) {
    humanScore++;
    console.log(`You win! ${h} beats ${c}.`);
    return "human";
  } else {
    computerScore++;
    console.log(`You lose! ${c} beats ${h}.`);
    return "computer";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);