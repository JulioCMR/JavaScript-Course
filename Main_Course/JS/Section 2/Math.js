// Questions ---

// 1. What does Math.random() do?
// It generates and return a random number between 0 and 1 (not including 1).

// 2. What does Math.floor do to positive numbers?
// It removes the decimals (round down the number)

// Exercises ---

// Exercise 1 -
// Generate a random number between 0 and 1

let randomNumber = Math.random() 



// Exercise 2 -
// Generate a random number between 0 and 6

randomNumber = Math.random() * 6



// Exercise 3 -
// Generate a random number between 0 and 8 (Not including 8), and remove it's decimals.

randomNumber = Math.random() * 8

let floorNumber = Math.floor(randomNumber)


// Exercise 4 -
// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    randomNumber = Math.floor(Math.random() * 6) + 1


    return randomNumber
}

console.log(rollDice())