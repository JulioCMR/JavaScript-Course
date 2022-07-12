/* BlackJack game main JavaScript file */

//  Variables ---

// 1. Create two variables, firstCard and secondCard (Set their values to a random number between 2-11)

let firstCard = 4
let secondCard = 6

// 2. Create a variable, sum, and set it to the sum of the two cards nnnnnnn

let sum = firstCard + secondCard 

// Conditionals

if (sum < 21) {
    console.log("Do you want to draw a new card.🙂")
} else if (sum == 21) {
    console.log("Wohoo! You've got Blackjack!🤑")
} else {
    console.log("You're out of the game🤡")
}

