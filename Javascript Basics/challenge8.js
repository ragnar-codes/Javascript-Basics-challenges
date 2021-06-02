// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function doThat(number, divider) {
    while(number % divider !== 0) {
      number++;
    }
    return number;
}

console.log(doThat(23, 23));