function getComputerChoice () {
    let choice;
    switch (Math.floor(Math.random() * 3)){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "scissors";
            break;
        case 2:
            choice = "paper";
            break;
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;
const numberRounds = 5;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {  
    button.addEventListener("click", () => playRound(button.className));
}); 

const roundsPara = document.querySelector(".numberRounds");
roundsPara.textContent = `The number of rounds you are going to play is : ${numberRounds}`;

function playRound (humanChoice) {
    let computerChoice = getComputerChoice();
    let combination = humanChoice + computerChoice;
    let message;
    let win = "You won this round ! ";
    let lose = "You lost this round ! ";
    let paper = "Paper beats Rock.";
    let rock = "Rock beats Scissors.";
    let scissors = "Scissors beat Paper.";

    if (humanChoice === computerChoice){
        message = "It's a draw !";
    }
    switch (combination) {
        case "rockpaper":
            message = lose + paper;
            ++computerScore;
            break;
        case "rockscissors":
            message = win + rock;
            ++humanScore;
            break;
        case "paperrock":
            message = win + paper;
            ++humanScore;
            break;
        case "paperscissors":
            message = lose + scissors;
            ++computerScore;
            break;
        case "scissorsrock":
            message = lose + rock;
            ++computerScore;
            break;
        case "scissorspaper":
            message = win + scissors;
            ++humanScore;
            break;
    }
    const compChoicePara = document.createElement("p");
    compChoicePara.textContent = `The computer chose : ${computerChoice}`;
    const resultPara = document.createElement("p");
    resultPara.textContent = message;
    const scorePara = document.createElement("p");
    scorePara.textContent = `Human Score : ${humanScore} /// Computer Score : ${computerScore}`;
    const resultDiv = document.querySelector(".results");
    resultDiv.appendChild(compChoicePara);
    resultDiv.appendChild(resultPara);
    resultDiv.appendChild(scorePara);

    
    //while(humanScore !== numberRounds && computerScore !== numberRounds){
    if( humanScore == numberRounds){
        let finalMessage = "You won the game ! ";
        const body = document.querySelector("body");
        const finalPara = document.createElement("p");
        finalPara.classList.add("finalPara");
        finalPara.textContent = finalMessage;
        body.appendChild(finalPara);
    }
    else if( computerScore == numberRounds){
        let finalMessage = "You lost the game ! ";
        const body = document.querySelector("body");
        const finalPara = document.createElement("p");
        finalPara.textContent = finalMessage;
        body.appendChild(finalPara);
    }
}



