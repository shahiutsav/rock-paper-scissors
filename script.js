// create list of "Rock, Paper, Scissors" for computer to choose from
const computerArmory = ["rock", "paper", "scissors"]

// Randomly choose an object from the list
function computerPlay() {
    const computerWeapon =
        computerArmory[Math.floor(Math.random() * computerArmory.length)]
    return computerWeapon
}

// compare the user input with computer's selection
function compareWeapon(computerWeapon, playerWeapon) {
    computerWeapon = computerPlay()
    playerInput = prompt("Please enter your 'weapon': ")
    playerWeapon = playerInput.toLowerCase()
    console.log(computerWeapon)
    console.log(playerWeapon)
}

compareWeapon()
// Declare the result
