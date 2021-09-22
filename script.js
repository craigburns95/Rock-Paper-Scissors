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

function win(userChoice, computerChoice) {
  userScore++;  
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = userChoice + " beats " + computerChoice + ". you win";
}

function lose() {

}

function draw() {

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