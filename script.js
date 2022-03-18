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
    console.log(computerSelection)
    console.log(playerSelection)
    if (computerSelection == playerSelection) {
        console.log("It's a draw")
        return "It's a draw"
    } else if (
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        console.log(
            "You lose! " + computerSelection + " beats " + playerSelection
        )
        return "You lose! " + computerSelection + " beats " + playerSelection
    } else if (
        (computerSelection == "paper" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "rock") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        console.log(
            "You Win! " + playerSelection + " beats " + computerSelection
        )
        return "You Win! " + playerSelection + " beats " + computerSelection
    } else {
        console.log("Oops! Please enter a valid hand")
    }
}

// repeat the game for five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        compareSelection(computerPlay(), playerPlay())
    }
}

game()
