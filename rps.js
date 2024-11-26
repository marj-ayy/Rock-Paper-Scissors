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

function getHumanChoice () {
    let choice;
    do {
        choice = prompt("Enter Rock, Paper or Scissors : ");
        if(choice !== null)
            choice = choice.toLowerCase();
    }
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

function playRound (humanChoice, computerChoice) {

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
    console.log("The computer chose : " + computerChoice);
    console.log(message);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    let numberRounds = Number(prompt("How many rounds do you want to play ? "));
    if (numberRounds !== 0){
    while(humanScore !== numberRounds && computerScore !== numberRounds){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score : " + humanScore + " and computer score : " + computerScore + ".");
    }
    if( humanScore == numberRounds)
        console.log("You won the game ! ");
    else if (computerScore == numberRounds )
        console.log("You lost the game ! ");
    }
    else
        console.log("You chose to cancel the game.");

}


const computerChoice = getComputerChoice();
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.className, computerChoice));
});



