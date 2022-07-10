// File with exercises practices from the first section (or first app) of the course.

// Variables ~~~~~~~~~~

// Create two variables, firstName and lastName

let firstName = "Julio"

let lastName = "Morales"

// Concatenate the two variables into a third variable called fullName

let fullName = firstName + " " + lastName

// Log fullName to the console.  

console.log(fullName)

// Concatenate Strings ~~~~~~~~~~ 


// Create a function that logs out "Hi there, Linda!" when called

let name = "Linda"
let greeting = "Hi there"

function fullGreeting() {
    console.log(greeting + ", " + name + "!")
}

fullGreeting()

// Incrementing and Decrementing ~~~~~~~~~~

/* Create two functions, add3Points() and remove1Point(), and have them add/remove
points to/from myPoints variable. */

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

// Call the functions to that the the console logs out 10.

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)

// Strings & Numbers ~~~~~~~~~~

// Try to predict what each of the lines will log out.

console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points: 59"
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"

// Rendering error message ~~~~~~~~~~

// HTML file: shoeshop.html
// CSS file: shoeshop.css

/* When the user clicks the purchase button, render out
"Something went wrong, please try again" in the paragraph
that has the id="error". */

let errorMessage = document.getElementById("error")

function purchaseError() {
    errorMessage.textContent = "Something went wrong, please try again."
}

// Calculator challenge ~~~~~~~~~~

// HTML file: calculator.html
// CSS file: calculator.css

/* 
A) Create four functions: add(), substract(), divide(), multiply()
B) Call the correct function when the user clicks on one of the buttons
C) Perform the given calculation using num1 and num2
D) Render the result of the calculation in the paragraph with id="sum-el"  */

let num1 = 2
let num2 = 5

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2



let sumEl = document.getElementById("sum-el")



function add() {
    let result = num1 + num2
    sumEl.textContent = "Result: " + result

}

function substract() {
    let result = num1 - num2
    sumEl.textContent = "Result: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Result: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Result: " + result
}



