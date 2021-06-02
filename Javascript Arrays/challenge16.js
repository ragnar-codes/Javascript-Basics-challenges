// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(arr) {
    let last = arr.length - 1;
    return arr[last];
}

console.log(myFunction([1, 2, 3]));