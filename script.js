// create list of "Rock, Paper, Scissor" for computer to choose from
const computerArmory = ["rock", "paper", "scissor"]

// Randomly choose an object from the list
function computerPlay() {
    const computerSelection =
        computerArmory[Math.floor(Math.random() * computerArmory.length)]
    return computerSelection
}

// Take user input
function playerPlay() {
    playerInput = prompt("Please enter your hand: ")
    playerSelection = playerInput.toLowerCase()
    return playerSelection
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
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
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
        (computerSelection == "paper" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
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
function game() {
    for (let i = 0; i < 5; i++) {
        compareSelection(computerPlay(), playerPlay())
    }
}

game()

// Capitalize strings
function capitalize(selection) {
    selectionCapitalized =
        selection.charAt(0).toUpperCase() + selection.slice(1)
    return selectionCapitalized
}
