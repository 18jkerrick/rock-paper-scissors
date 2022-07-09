function computerPlay() {
  // gets random integer between 0 and 2
  let randInt = Math.floor(Math.random() * 3);
  let compChoice = null;
  if (randInt === 0) {
    compChoice = "rock";
  } else if (randInt === 1) {
    compChoice = "scissors";
  } else if (randInt === 2) {
    compChoice = "paper";
  }
  return compChoice;
}

function play(computerSelection, playerSelection) {
  let decision = null;
  // losing scenario
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    decision = "You lose!";
  }
  // winning scenario
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    decision = "You win!";
  }
  // tie scenario
  else {
    decision = "Tie!";
  }
  return decision;
}

function game() {
  let compScore = 0;
  let playerScore = 0;
  // game is player 5 times
  for (let i = 0; i < 5; i++) {
    // to lowercase in order to keep consistency
    let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    let outcome = play(computerPlay(), playerChoice);
    alert(outcome);
    if (outcome === "You lose!") {
      compScore++;
    } else if (outcome === "You win!") {
      playerScore++;
    }
  }
  console.log(`Computer: ${compScore}\nPlayer: ${playerScore}`);
}

game();
