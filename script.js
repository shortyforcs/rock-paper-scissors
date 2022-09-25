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
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    console.log(playerSelection)
    console.log(computerSelection)
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
console.log(playRound("SCISSORS", "rock"));