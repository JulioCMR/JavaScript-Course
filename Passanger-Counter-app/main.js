// ~~~~~ Start Button (Increment on clicks) ~~~~~

// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to increment the new count

let count = 0

let countEl = document.getElementById("count-el")

function increment() { 
    count += 1    
    console.log(count)
    countEl.innerText = count
}

// ~~~~~ End Button (Increment on clicks) ~~~~~

// ~~~~~ Start Save Button function ~~~~~~~

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}


// ~~~~~ End Save Button function ~~~~~~~

