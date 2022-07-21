// Functions

// Questions ---
// 1. What are functions?
// Reusable code of blocks

// Exercises ---

// Exercise 1: Create and invoke a function that countdown from the number 5 to the number 1.

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()

// Exercise 2: Create and invoke function that logs the number 42.

function log42() {
    console.log(42)
}

log42()

// Exercise 3: Create and invoke a function that logs out the sum of 3 numeric variables.

// Global scope variables
let num1 = 34
let num2 = 33
let num3 = 36

function sum() {
    let num_total = num1 + num2 + num3 //Local Scope Variables
    console.log(num_total)
}

sum()

// Exercise 4: Create a function that increments a variable with one each time is invoked, and invoked 3 times.

let count = 0

function increment() {
    count += 1
}

increment()
increment()
increment()

console.log(count)

// Exercise 5
/* 
A) Write a function that returns the total race time
B) Call the function and store the returned value in a new variable
C) Log the variable out */

let player1Time = 102
let player2Time = 107

function getTotalRaceTime(){
    return player1Time + player2Time
}

let totalRaceTime = getTotalRaceTime()

console.log(totalRaceTime)