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
  if (computerSelection === "rock" && playerSelection === "scissors") {
    decision = "You lose! Rock beats scissors";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    decision = "You lose! Scissors beat Paper";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    decision = "You lose! Paper beat Rock";
  }
  // winning scenario
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    decision = "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    decision = "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    decision = "You win! Paper beats rock";
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
    if (outcome.startsWith("You lose!")) {
      compScore++;
    } else if (outcome.startsWith("You win!")) {
      playerScore++;
    }
  }
  console.log(`Computer: ${compScore}\nPlayer: ${playerScore}`);
}

game();
