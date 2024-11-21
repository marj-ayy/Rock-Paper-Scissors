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
        choice = prompt("Enter Rock, Paper, or Scissors : ");
        if(choice !== null)
            choice = choice.toLowerCase();
    }
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

getHumanChoice();
