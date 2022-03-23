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
    console.log(capitalize(computerSelection))
    console.log(capitalize(playerSelection))

    // Draw case scenario
    if (computerSelection == playerSelection) {
        console.log("It's a draw")
        return "It's a draw"
    } // Every computer wins
    else if (
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore += 1
        console.log(
            "You lose! " +
                capitalize(computerSelection) +
                " beats " +
                capitalize(playerSelection)
        )
        return (
            "You lose! " +
            capitalize(computerSelection) +
            " beats " +
            capitalize(playerSelection)
        )
    } // Every user wins
    else if (
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        playerScore += 1
        console.log(
            "You Win! " +
                capitalize(playerSelection) +
                " beats " +
                capitalize(computerSelection)
        )
        return (
            "You Win! " +
            capitalize(playerSelection) +
            " beats " +
            capitalize(computerSelection)
        )
    } // Invalid input
    else {
        console.log(
            "Oops! " + capitalize(playerSelection) + " is not a valid hand"
        )
    }
}

// repeat the game for five rounds
function game(playerSelection) {
    compareSelection(computerPlay(), playerSelection)
    console.log("Player Score: " + playerScore)
    console.log("Computer Score:" + computerScore)
}

// Capitalize strings
function capitalize(selection) {
    selectionCapitalized =
        selection.charAt(0).toUpperCase() + selection.slice(1)
    return selectionCapitalized
}
