// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(num) {

    return Number.isInteger(num);
}

console.log(myFunction(5));