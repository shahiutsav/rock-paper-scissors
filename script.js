// create list of "Rock, Paper, Scissors" for computer to choose from
const computerArmory = ["rock", "paper", "scissors"]

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
    if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You lose! Scissors beats Paper")
        return "You lose! Scissors beats Paper"
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You lose! Rock beats Scissors")
        return "You lose! Rock beats Scissors"
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You lose! Paper beats Rock")
        return "You lose! Paper beats Rock"
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You Win! Scissors beats Paper")
        return "You Win! Scissors beats Paper"
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You Win! Rock beats Scissors")
        return "You Win! Rock beats Scissors"
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You Win! Paper beats Rock")
        return "You Win! Paper beats Rock"
    } else {
        console.log("It's a draw")
        return "It's a draw"
    }
}

// repeat the game for five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        compareSelection(computerPlay(), playerPlay())
    }
}

game()
