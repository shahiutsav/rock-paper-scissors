// Get elements from the html document
const scoreInfo = document.querySelector("#scoreInfo")
const playerScoreDisplay = document.querySelector("#playerScore")
const computerScoreDisplay = document.querySelector("#computerScore")
const scoreDisplay = document.querySelector(".score-comparison")
const buttons = document.querySelector(".buttons")

// Create list of "Rock, Paper, Scissors" for computer to choose from
const computerArmory = ["rock", "paper", "scissors"]

// Initial score for both computer and player
let computerScore = 0
let playerScore = 0

// Randomly choose and return a hand from the list
function computerPlay() {
    const computerSelection =
        computerArmory[Math.floor(Math.random() * computerArmory.length)]
    return computerSelection
}

// Compare user's selection with computer's selection
function compareSelection(computerSelection, playerSelection) {
    // Draw case scenario
    if (computerSelection == playerSelection) {
        return "It's a draw this round"
    } // scenarios where the computer wins
    else if (
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore += 1 // Adds to the computer score
        return `Oh oh! Your ${capitalize(
            playerSelection
        )} got beat by opponent's ${capitalize(computerSelection)}`
    } // scenarios where the user wins
    else if (
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        playerScore += 1 // Adds to the player score
        return `Great! Your ${capitalize(
            playerSelection
        )} annihilated your opponent's ${capitalize(computerSelection)}`
    }
}

// Main function to be called
function game(playerSelection) {
    scoreInfo.textContent = compareSelection(computerPlay(), playerSelection) // compare the selections
    if (playerScore === 5 || computerScore === 5) {
        // check if player or computer has 5 points/score
        replayButton() // Add replay button
        if (playerScore > computerScore) {
            // Player win scenario
            scoreDisplay.textContent = "You Won!"
            scoreInfo.classList.add("win")
            scoreInfo.textContent = `Great going! You won by ${
                playerScore - computerScore
            } point(s)`
        } else {
            // Computer win scenario
            scoreDisplay.textContent = "Game Over!"
            scoreInfo.classList.add("lost")
            scoreInfo.textContent = `Bummer! You lost by ${
                computerScore - playerScore
            } point(s)`
        }
    } else {
        // Display ongoing score
        playerScoreDisplay.textContent = "Player Score: " + playerScore
        computerScoreDisplay.textContent = "Computer Score: " + computerScore
    }
}

// Display replay button
function replayButton() {
    const btnReplay = document.createElement("button") // Create replay button element
    btnReplay.classList.add("btn-replay") // Add style to the button
    btnReplay.textContent = "Replay" // Add content inside of the button

    while (buttons.firstChild) {
        // run until the first child has been removed
        buttons.removeChild(buttons.lastChild) // removing existing buttons from the parent node `buttons`
    }
    buttons.appendChild(btnReplay) // Add button to html document
    btnReplay.onclick = () => location.reload() // Reload page on click
}

// Capitalize strings
function capitalize(selection) {
    selectionCapitalized =
        selection.charAt(0).toUpperCase() + selection.slice(1)
    return selectionCapitalized
}
