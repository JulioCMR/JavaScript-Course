/* BlackJack game main JavaScript file */

//  Variables ---


let firstCard = 4
let secondCard = 6
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

let sum = firstCard + secondCard + 11

// Conditionals (if-else and booleans) ---

function startGame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message

}



