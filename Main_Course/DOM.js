// What is DOM (Document Object Model)?
/* It's a Programming interface model used to interact and manipulate with XML and HTML documents using programming languages. It's like a structured template used by webpages so that they can be manipulated by programming languages (in this case, JavaScript.)  */

// Exercises

// 1. Grab the count-el element, store it in a countEl variable.

let  countEL = document.getElementById("count-el")

// 2. Inner this function, set countEl's to the count
function increment() {
    count += 1
    countEL.innerText = count
}
