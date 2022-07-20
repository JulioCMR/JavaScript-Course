// Questions -----

// 1. In programming, what is a loop?
// It's a block of code, used to repeat/execute lines of code a certain number of times.


// Exercises -----

// Exercise 1 -
// Create a for loop that counts from 10 to 100 in steps of 10. Log out the numbers.

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

// Exercise 2 -
// Create a for loop that logs out all the cards in an array. Use cards.lenght to specify how long the loop should run.

let cards = [7, 3, 9]

for (let i = 0; i < cards.length; i ++){
    console.log(cards[i])
}

// Exercise 3 -
// File used: HTML file, Section 2: forLoops.html
// Render the sentence in the greetingEl paragraph using a for loop and .textContent

let sentence = ["Hello", "my", "name", "is", "Julio"]
let greeting = document.getElementById("greeting-el")

for (i = 0; i < sentence.length; i++){
    greeting.textContent += sentence[i] + " "
}

