// create list of "Rock, Paper, Scissors" for computer to choose from
const computerArmory = ["rock", "paper", "scissors"]

// Randomly choose an object from the list
function computerPlay() {
    const computerWeapon =
        computerArmory[Math.floor(Math.random() * computerArmory.length)]
    return computerWeapon
}

playerInput = prompt("Please enter your 'weapon': ")
playerWeapon = playerInput.toLowerCase()

// compare the user input with computer's selection
function compareWeapon(computerWeapon, playerWeapon) {
    console.log(computerWeapon)
    console.log(playerWeapon)
    if (computerWeapon == "scissors" && playerWeapon == "paper") {
        console.log("You lose! Scissors beats Paper")
        return "You lose! Scissors beats Paper"
    } else if (computerWeapon == "rock" && playerWeapon == "scissors") {
        console.log("You lose! Rock beats Scissors")
        return "You lose! Rock beats Scissors"
    } else if (computerWeapon == "paper" && playerWeapon == "rock") {
        console.log("You lose! Paper beats Rock")
        return "You lose! Paper beats Rock"
    } else if (computerWeapon == "paper" && playerWeapon == "scissors") {
        console.log("You Win! Scissors beats Paper")
        return "You Win! Scissors beats Paper"
    } else if (computerWeapon == "scissors" && playerWeapon == "rock") {
        console.log("You Win! Rock beats Scissors")
        return "You Win! Rock beats Scissors"
    } else if (computerWeapon == "rock" && playerWeapon == "paper") {
        console.log("You Win! Paper beats Rock")
        return "You Win! Paper beats Rock"
    } else {
        console.log("It's a draw")
        return "It's a draw"
    }
}

compareWeapon(computerPlay(), playerWeapon)
// Declare the result
