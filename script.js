// get computer choice

// use Math.random to get number between 0 and 3
// use switch to set computer choice to r p or s

function getComputerChoice() {
  let choiceNumber = Math.floor(Math.random() * 3);
  switch (choiceNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.log("Something wrong with choice generation.");
  }
}

function playRound(playerSelection, computerSelection) {
  const winMessage = "You Win! ";
  const loseMesage = "You Lose! ";
  if (playerSelection == null) {
    return "No player input."
  }
  let playerPick = playerSelection.toLowerCase();

  if (playerPick === computerSelection) {
    return "You Tie! You both selected " + computerSelection;
  }
  switch(playerPick) {
    case "rock":
      if (computerSelection === "scissors") {
        return winMessage + playerPick + " beats " + computerSelection;
      } else {
        return loseMesage + computerSelection + " beats " + playerPick;
      }
    case "paper":
      if (computerSelection === "rock") {
        return winMessage + playerPick + " beats " + computerSelection;
      } else {
        return loseMesage + computerSelection + " beats " + playerPick;
      }
    case "scissors":
      if (computerSelection === "paper") {
        return winMessage + playerPick + " beats " + computerSelection;
      } else {
        return loseMesage + computerSelection + " beats " + playerPick;
      }
    default: 
      return "Invalid player input";
  }
}

function game() {
  let playerSelection;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Pick rock, paper, or scissors");
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);
  }
}

game();