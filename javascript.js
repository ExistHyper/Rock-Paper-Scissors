function getComputerChoice() {
    let min = 1;
    let max = 3;
    let roll = 0
    roll = Math.floor(Math.random() * (max - min)) + min;
    switch(roll) {
        case 1:
            console.log("Scissors!");
            break;
        case 2:
            console.log("Rock!");
            break;
        case 3:
            console.log("Paper!");
            break;
        default:
            console.log("Error!");
        
    }
    return roll;
}

function getPlayerChoice(playerInput) {
    let moveToNum = 0;
    switch(playerInput) {
        case "Scissors":
            moveToNum = 1;
            break;
        case "Rock":
            moveToNum = 2;
            break;
        case "Paper":
            moveToNum = 3;
            break;
        default:
            console.log("Error parsing your move!")

    }
    return moveToNum;
}


    
function playRound(playerSelection, computerSelection) {
        
            
    if(playerSelection == computerSelection) {
        console.log("Draw!");
        pointCode = 2;
    }
    else if(playerSelection == 1 && computerSelection == 2) {
        console.log("Computer wins!");
        pointCode = 0;
        
    }
    else if(playerSelection == 2 && computerSelection == 1) {
        console.log("Player wins!");
        pointCode = 1;
    }
    else if(playerSelection == 2 && computerSelection == 3) {
        console.log("Computer wins!");
        pointCode = 0;
    }
    else if(playerSelection == 3 && computerSelection == 2) {
        console.log("Player wins!");
        pointCode = 1;
    }
    else if(playerSelection == 1 && computerSelection == 3) {
        console.log("Player wins!");
        pointCode = 1;
    }
    else if(playerSelection == 3 && computerSelection == 1) {
        console.log("Computer wins!");
        pointCode = 0;
    }
    else {
        console.log("Error occured!");
        pointCode = 2;
    }
    return pointCode;
}

let pointCode = 2;
let playerPointCount = 0;
let computerPointCount = 0;
let roundNum = 1;

while(1) {
            
    console.log(`Round ${roundNum}!`);
    let playerInput = prompt("Enter your choice: ");
    playRound(getPlayerChoice(playerInput), getComputerChoice());
            
    switch(pointCode) {
        case 0:
            computerPointCount++;
            break;
        case 1:
            playerPointCount++;
            break;
        case 2:
            break;
    }
    if(playerPointCount == 3 || computerPointCount == 3) {
        break;
    }
    roundNum++;
}

console.log("testing")