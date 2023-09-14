function getComputerChoice() {
    let min = 1;
    let max = 3;
    let roll = 0
    roll = Math.floor(Math.random() * (max - min)) + min;

    return roll;
}

function getPlayerChoice(playerInput) {
    let moveToNum = 0;
    switch(playerInput) {
        case "scissors":
            moveToNum = 1;
            break;
        case "rock":
            moveToNum = 2;
            break;
        case "paper":
            moveToNum = 3;
            break;
        default:
            

    }
    return moveToNum;
}


    
function playRound(playerSelection, computerSelection) {
        
            
   
    if(playerSelection == computerSelection) {
        //console.log("Draw!");
        pointCode = 2;
    }
    else if(playerSelection == 1 && computerSelection == 2) {

        pointCode = 0;
        
    }
    else if(playerSelection == 2 && computerSelection == 1) {
        //console.log("Player wins!");
        pointCode = 1;
    }
    else if(playerSelection == 2 && computerSelection == 3) {
        //console.log("Computer wins!");
        pointCode = 0;
    }
    else if(playerSelection == 3 && computerSelection == 2) {
        //console.log("Player wins!");
        pointCode = 1;
    }
    else if(playerSelection == 1 && computerSelection == 3) {
        //console.log("Player wins!");
        pointCode = 1;
    }
    else if(playerSelection == 3 && computerSelection == 1) {
        //console.log("Computer wins!");
        pointCode = 0;
    }
    else {
        //console.log("Error occured!");
        pointCode = 2;
    }
    return pointCode;
}


let pointCode = 2;
let playerPointCount = 0;
let computerPointCount = 0;

const startGameButton = document.getElementById("start-game");


startGameButton.addEventListener('click', () => {
    startGameButton.textContent = 'Play!';
    

    const playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((button) => {
        
        button.addEventListener('click', () => {
            playerInput = button.className;

            playRound(getPlayerChoice(playerInput), getComputerChoice());
              

            switch(pointCode) {

                case 0:
                    
                    computerPointCount++;
                    const computerPoints = document.getElementById("computer");
                    computerPoints.textContent = computerPointCount.toString();
                    const communicate1 = document.getElementById("start-game");
                    communicate1.textContent = "Computer Point!";
                    break;
                case 1:
                    playerPointCount++;
                    const playerPoints = document.getElementById("player");
                    playerPoints.textContent = playerPointCount.toString();
                    const communicate2 = document.getElementById("start-game");
                    communicate2.textContent = "Your Point!";
                  
                    break;
                case 2:
                    const communicate = document.getElementById("start-game");
                    communicate.textContent = "Draw!";

                    break;
            }
            if(playerPointCount == 5) {
                const communicate = document.getElementById("start-game");
                communicate.textContent = "You Win! - ";
                communicate.textContent += "click to play again";

                communicate.addEventListener('click', () => {
                    location.reload();
                })
                
               
                
            } else if ( computerPointCount == 5) {
                const communicate = document.getElementById("start-game");
                communicate.textContent = "Game Over! - ";
                communicate.textContent += "click to try again"
                
                communicate.addEventListener('click', () => {
                    location.reload();
                })
                
                
                

            }


            
            
            });
        });
        
});
    
