const openRules = document.querySelector(".open");
const closeRules = document.querySelector(".close-btn");
const rules = document.querySelector(".rules-container");
const discs = document.querySelectorAll(".disc");
const gameWrapper = document.querySelector(".game-wrapper");
const gameBoard = document.querySelector(".game-board");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const verdict = document.querySelector(".verdict");
const verdictText = document.querySelector(".verdict h1");
const playAgain = document.querySelector(".verdict button");
const scoreText = document.querySelector(".score-num");
let score = 0;

//Opening rule
openRules.addEventListener("click", () => {
  rules.style.display = "flex";
});
closeRules.addEventListener("click", () => {
  rules.style.display = "none";
});

//opening rule end

discs.forEach((disc) => {
  disc.addEventListener("click", () => {
    discs.forEach((disc) => {
      disc.classList.remove("clicked");
    });

    gameWrapper.style.display = "none";
    gameBoard.style.display = "flex";

    var clone = disc.cloneNode(true);
    clone.id = "";
    player1.appendChild(clone);
    computer();
  });
});

function computer() {
  const options = ["Rock", "Paper", "Scissors"];
  const compInput = options[Math.floor(Math.random() * 3)];
  let className;
  let div = document.createElement("div");
  let playImg = `<img src="images/icon-rock.svg" alt="fisted palm">`;

  if (compInput === options[0]) {
    className = "rock";
    playImg = `<img src="images/icon-rock.svg" alt="fisted palm">`;
  } else if (compInput === options[1]) {
    className = "paper";
    playImg = `<img src="images/icon-paper.svg" alt="flat palm">`;
  } else if (compInput === options[2]) {
    className = "scissors";
    playImg = `<img src="images/icon-scissors.svg" alt="peace sign with ">`;
  }
  div.classList.add("disc", className);
  let inner = `
  <div class="inner">
    ${playImg}
  </div>`;
  div.innerHTML += inner;
  player2.appendChild(div);
  div.classList.add("disc", className);

  /*




  */
  let player1Check = gameBoard.children[0];
  let gamePlayer1 = player1Check.children[1];
  let player2Check = gameBoard.children[2];
  let gamePlayer2 = player2Check.children[1];
  if (
    gamePlayer1.classList.contains("rock") &&
    gamePlayer2.classList.contains("rock")
  ) {
    verdictText.textContent = "It's a tie";
  } else if (
    gamePlayer1.classList.contains("rock") &&
    gamePlayer2.classList.contains("paper")
  ) {
    score--;
    verdictText.textContent = "you lose";
  } else if (
    gamePlayer1.classList.contains("rock") &&
    gamePlayer2.classList.contains("scissors")
  ) {
    score++;
    verdictText.textContent = "you win";
  }
  //with paper
  else if (
    gamePlayer1.classList.contains("paper") &&
    gamePlayer2.classList.contains("rock")
  ) {
    score++;
    verdictText.textContent = "You win";
  } else if (
    gamePlayer1.classList.contains("paper") &&
    gamePlayer2.classList.contains("paper")
  ) {
    verdictText.textContent = "it's a tie";
  } else if (
    gamePlayer1.classList.contains("paper") &&
    gamePlayer2.classList.contains("scissors")
  ) {
    score--;
    verdictText.textContent = "you lose";
  }
  //with scissors
  else if (
    gamePlayer1.classList.contains("scissors") &&
    gamePlayer2.classList.contains("rock")
  ) {
    score--;
    verdictText.textContent = "You lose";
  } else if (
    gamePlayer1.classList.contains("scissors") &&
    gamePlayer2.classList.contains("scissors")
  ) {
    verdictText.textContent = "it's a tie";
  } else if (
    gamePlayer1.classList.contains("scissors") &&
    gamePlayer2.classList.contains("paper")
  ) {
    score++;
    verdictText.textContent = "you win";
  }
  if (score <= 0) {
    score = 0;
  }
  verdict.style.display = "block";
  scoreText.textContent = score;
  if (verdictText.textContent.includes("lose")) {
    player2Check.classList.add("winner");
    player1Check.classList.remove("winner");
  } else if (verdictText.textContent.includes("win")) {
    player2Check.classList.remove("winner");
    player1Check.classList.add("winner");
  }
}

playAgain.addEventListener("click", () => {
  gameWrapper.style.display = "flex";
  gameBoard.style.display = "none";
  let tile1 = player1.childNodes[3];
  let tile2 = player2.childNodes[3];
  player1.removeChild(tile1);
  player2.removeChild(tile2);
});
