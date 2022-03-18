// create list of "Rock, Paper, Scissors" for computer to choose from
const computerArmory = ["Rock", "Paper", "Scissors"]

// Randomly choose an object from the list
function computerPlay() {
    const computerWeapon =
        computerArmory[Math.floor(Math.random() * computerArmory.length)]

    console.log(computerWeapon)
    return computerWeapon
}

computerPlay()

// take user input
const playerWeapon = prompt("Please enter your 'weapon': ")

// compare the user input with computer's selection
// Declare the result
