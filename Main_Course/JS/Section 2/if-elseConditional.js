/* What are conditional Statements used for?
 Statments that control the behavior of a program given a condition.*/

// What are the statements used for set if-else conditionals in programming, and what each of them do?

// If: Establishes the main contidional.
// else: Establishes what is going to happen if the if conditional is not met.
// else if: Establishes more exact secondary conditionals.

// Exercise 1 -----

// Check if a person is old enough to enter the nightclub (21), log a suitable message to the console for both cases

let age = 20

if (age >= 21) {
    console.log("Welcome!")
} else {
    console.log("You can't enter the club kiddo!")
}

// Exercise 2 -----

// Check if the person is elegible for a birthday card from the Norgewian King

// If less than 100 -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King"
// else -> "Not elegible, you have already gotten one"

age = 105

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the king: 'Congratulations'")
} else {
    console.log("Not elegible, you have already gotten one")
}



