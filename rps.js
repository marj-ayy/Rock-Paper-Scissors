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

console.log(getComputerChoice());