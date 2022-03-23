// Get elements from the html document
const scoreInfo = document.querySelector("#scoreInfo")
const playerScoreDisplay = document.querySelector("#playerScore")
const computerScoreDisplay = document.querySelector("#computerScore")

// create list of "Rock, Paper, Scissors" for computer to choose from
const computerArmory = ["rock", "paper", "scissors"]

// Initial scores for both
let computerScore = 0
let playerScore = 0

// Randomly choose an object from the list
function computerPlay() {
    const computerSelection =
        computerArmory[Math.floor(Math.random() * computerArmory.length)]
    return computerSelection
}

// compare the user input with computer's selection
function compareSelection(computerSelection, playerSelection) {
    // Draw case scenario
    if (computerSelection == playerSelection) {
        return "It's a draw"
    } // every time computer wins
    else if (
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore += 1
        return (
            "You lose! " +
            capitalize(computerSelection) +
            " beats " +
            capitalize(playerSelection)
        )
    } // every user wins
    else if (
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        playerScore += 1
        return (
            "You Win! " +
            capitalize(playerSelection) +
            " beats " +
            capitalize(computerSelection)
        )
    }
}

// repeat the game for five rounds
function game(playerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        scoreInfo.textContent = "The game has ended"
    }
    scoreInfo.textContent = compareSelection(computerPlay(), playerSelection)
    playerScoreDisplay.textContent = "Player Score: " + playerScore
    computerScoreDisplay.textContent = "Computer Score: " + computerScore
}

// Capitalize strings
function capitalize(selection) {
    selectionCapitalized =
        selection.charAt(0).toUpperCase() + selection.slice(1)
    return selectionCapitalized
}
