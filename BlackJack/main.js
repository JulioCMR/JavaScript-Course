/* BlackJack game main JavaScript file */

//  Variables ---


let firstCard = 4
let secondCard = 6
let cards = [firstCard, secondCard]
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let sum = firstCard + secondCard 

// Start Game function ---

function startGame(){
    renderGame()
}

// Main game Function ---

function renderGame() {

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] +  " "
    }

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


// New Card Function ---

function newCard() {
    let newCard = 5
    sum += newCard
    cards.push(newCard)
    renderGame()    
}



