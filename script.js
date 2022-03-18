// create list of "Rock, Paper, Scissors" for computer to choose from
const computerArmory = ["Rock", "Paper", "Scissors"]
// Randomly choose an object from the list
function computerPlay() {
    const computerWeapon =
        computerArmory[Math.floor(Math.random() * computerArmory.length)]

    console.log(computerWeapon)
}

computerPlay()
// take user input
// compare the user input with computer's selection
// Declare the result
