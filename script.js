/* Generate random number between 0 and 2, and return a unique result based on the answer.
0 == Rock, 1 == Paper, and 2 == Scissors */
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if(randomNum == 0){
        return "rock";
    } else if(randomNum == 1){
        return "paper"
    } else {
        return "scissors"
    }
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    if(computerSelection == "rock"){
        if(playerSelectionLowerCase == "rock"){
            return "Tie"
        }else if (playerSelectionLowerCase == "paper"){
            return "Win"
        }else {
            return "Lose"
        }
    } else if(computerSelection == "paper"){
        if(playerSelectionLowerCase == "rock"){
            return "Lose"
        }else if (playerSelectionLowerCase == "paper"){
            return "Tie"
        }else {
            return "Win"
        }
    } else if(computerSelection == "scissors"){
        if(playerSelectionLowerCase == "rock"){
            return "Win"
        }else if (playerSelectionLowerCase == "paper"){
            return "Lose"
        }else {
            return "Tie"
        }
    }
}
// console.log(playRound("SCISSORS", "rock"));

function game(){
    let winCount = 0;
    let lossCount = 0;
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        console.log(computerSelection)
        console.log(playerSelection)
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result == "Win")
            winCount++;
        else if(result == "Lose")
            lossCount++;
    }
    if(winCount >= lossCount)
        console.log("You win the game!")
    else
        console.log("You lose the game...")
}
game();