//Local Storage
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
displayScore();

function game(choice) {
  // 0 = rock, 1 = paper, 2 = scissors
  const computerChoice = Math.floor(Math.random() * 3);
  var result;
  console.log(computerChoice);

  // Rock
  if (computerChoice === 0) {
    if (choice === "rock") {
      result = "It's a tie!";
    } else if (choice === "paper") {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  }
  // Paper
  else if (computerChoice === 1) {
    if (choice === "rock") {
      result = "You lose!";
    } else if (choice === "paper") {
      result = "It's a tie!";
    } else {
      result = "You win!";
    }
  }
  // Scissors
  else {
    if (choice === "rock") {
      result = "You win!";
    } else if (choice === "paper") {
      result = "You lose!";
    } else {
      result = "It's a tie!";
    }
  }

  //score tracking
  if (result == "It's a tie!") {
    score.ties++;
  } else if (result == "You win!") {
    score.wins++;
  } else {
    score.losses++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  //display results
  computerChoice2 =
    computerChoice === 0 ? "Rock" : computerChoice === 1 ? "Paper" : "Scissors";
  displayResult(result, computerChoice2, choice);
  displayScore();
}

// Reset score
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  alert("Score has been reset!");
  localStorage.setItem("score", JSON.stringify(score));
  displayScore();
}

function displayScore() {
  const scoreDisplay = document.querySelector(".js-score");
  scoreDisplay.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function displayResult(result, computerChoice, userChoice) {
  const resultDisplay = document.querySelector(".js-result");
  const movesDisplay = document.querySelector(".js-moves");

  resultDisplay.innerHTML = result;
  movesDisplay.innerHTML = `You Chose <img class="emoji emoji--small" src="images/${userChoice}.png" alt="${userChoice}" />
          Computer Chose <img class="emoji emoji--small" src="images/${computerChoice}.png" alt="${computerChoice}" />`;
}
