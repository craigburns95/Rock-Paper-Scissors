let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultp = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = math.floor(math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "rock";
    if (letter === "s") return "scissors";
    return "paper";
}

function win(userChoice, computerChoice) {
  userScore++;  
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup;
  const smallCompWord = "comp".fontsize(3).sup;
  resultDiv.innerHTML  `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord}. you win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;  
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup;
    const smallCompWord = "comp".fontsize(3).sup;
    resultDiv.innerHTML  `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. you lost!`;
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup;
    const smallCompWord = "comp".fontsize(3).sup;
    resultDiv.innerHTML  `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord}. it's a draw`;
}

function game(usercChoice) {
    const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;

    }
}


function main() {
    rockDiv.addEventListener("click", function () {
        game("r");
    })

    paperDiv.addEventListener("click", function () {
        game("p");
    })

    scissorsDiv.addEventListener("click", function () {
        game("s");
    }) 
}