/* BlackJack game main JavaScript file */

//  Variables ---


let firstCard = 4
let secondCard = 6
let hasBlackjack = false

let sum = firstCard + secondCard + 11 

// Conditionals (if-else) ---


if (sum <= 20) {
    console.log("Do you want to draw a new card?🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!🤑")
    hasBlackjack = true
} else {
    console.log("You're out of the game🤡")

}

// Conditionals (Booleans)
console.log(hasBlackjack)