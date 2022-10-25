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

function getResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  switch(playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        return "win";
      } else {
        return "lose";
      }
    case "paper":
      if (computerSelection === "rock") {
        return "win";
      } else {
        return "lose";
      }
    case "scissors":
      if (computerSelection === "paper") {
        return "win";
      } else {
        return "lose";
      }
    default: 
      return "invalid";
  }
}

function playRound(e) {
  const computerChoice = getComputerChoice();
  const pick = this.id;
  const winDisplay = document.querySelector('#wins');
  const tieDisplay = document.querySelector('#ties');
  const loseDisplay = document.querySelector('#losses');
  const update = document.querySelector('.update');
  let res = getResult(pick, computerChoice);
  if (res === "tie") {
    ties++;
    tieDisplay.textContent = `${ties}`;
    update.textContent = `You tied! You both picked ${computerChoice}`;
  } else if (res === "win") {
    wins++;
    winDisplay.textContent = `${wins}`;
    update.textContent = `You won! ${pick} beats ${computerChoice}`;
  } else if (res === "lose") {
    losses++;
    loseDisplay.textContent = `${losses}`;
    update.textContent = `You lost! ${computerChoice} beats ${pick}`;
  } else { // res === "invalid"
    update.textContent = `Something went wrong.`;
    return;
  }

  const buttons = document.querySelectorAll('.choice');
  if (losses === 5 || wins === 5) {
    buttons.forEach(button => button.removeEventListener('click', playRound));
    let finalResult = document.createElement("div");
    if (losses === 5) {
      finalResult.textContent = "You lost! Computer was first to five.";
    } else {
      finalResult.textContent = "You won! You were first to five."
    }
    update.appendChild(finalResult);
  }
}

let wins = 0;
let ties = 0;
let losses = 0;

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => button.addEventListener('click', playRound));