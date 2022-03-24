// Get elements from the html document
const scoreInfo = document.querySelector("#scoreInfo")
const playerScoreDisplay = document.querySelector("#playerScore")
const computerScoreDisplay = document.querySelector("#computerScore")
const scoreDisplay = document.querySelector(".score-comparison")
const buttons = document.querySelector(".buttons")

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
        return "It's a draw this round"
    } // every time computer wins
    else if (
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore += 1
        return `Oh oh! Your ${capitalize(
            playerSelection
        )} got beat by opponent's ${capitalize(computerSelection)}`
    } // every user wins
    else if (
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        playerScore += 1
        return `Great! Your ${capitalize(
            playerSelection
        )} annihilated your opponent's ${capitalize(computerSelection)}`
    }
}

// repeat the game for five rounds
function game(playerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        replayButton()
        if (playerScore > computerScore) {
            scoreDisplay.textContent = "You Won!"
            scoreInfo.classList.add("win")
            scoreInfo.textContent = `Great going! You won by ${
                playerScore - computerScore
            } point(s)`
        } else {
            scoreDisplay.textContent = "Game Over!"
            scoreInfo.classList.add("lost")
            scoreInfo.textContent = `Bummer! You lost by ${
                computerScore - playerScore
            } point(s)`
        }
    } else {
        scoreInfo.textContent = compareSelection(
            computerPlay(),
            playerSelection
        )
        playerScoreDisplay.textContent = "Player Score: " + playerScore
        computerScoreDisplay.textContent = "Computer Score: " + computerScore
    }
}

// Display replay button
function replayButton() {
    const btnRestart = document.createElement("button")
    btnRestart.classList.add("btn-replay")
    btnRestart.textContent = "Replay"

    while (buttons.firstChild) {
        buttons.removeChild(buttons.lastChild)
    }
    buttons.appendChild(btnRestart)
    btnRestart.onclick = () => location.reload()
}

// Capitalize strings
function capitalize(selection) {
    selectionCapitalized =
        selection.charAt(0).toUpperCase() + selection.slice(1)
    return selectionCapitalized
}
