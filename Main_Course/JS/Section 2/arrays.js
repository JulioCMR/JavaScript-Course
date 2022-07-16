// Questions -----

// 1. In programmming, what are arrays?
// It's a Data Structure that can store an ordered list of items.

// Exercises -----

// Exercise 1 -
/* Create an arrat that lists your i.e. experience, education, licenses, skills or similar things.
The items of the array should be strings. */

let skills = [
    "Python",
    "Linux", 
    "Cybersecurity",
    "Networking",
    "HTML",
    "CSS",
    "Javascript"
]



// Exercise 2 -
/* In the following order, make the next items appear:
1. HTML
2. CSS
3. Javascript
4. Linux
5. Python
6. Networking
7. Cybersecurity */

console.log(skills[4])
console.log(skills[5])
console.log(skills[6])
console.log(skills[1])
console.log(skills[0])
console.log(skills[3])
console.log(skills[2])

// Exercise 3 -
/* Create an array that describes yourself. Use the three primitive data types you've learned
It should contain your name (string), your age (number), and whether you like pizza (boolean). */

let me = ["Thomas Wayne", 22, true]

// Exercise 4 -
// Push the newMessage to the messages array, and then log out the array.

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portafolio lately"
]

newMessage = "Same here!"

messages.push(newMessage)

console.log(messages)

// Exercise 5
// Remove the last message from the messages array

messages.pop()

console.log(messages)