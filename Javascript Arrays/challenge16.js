// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(arr, n) {
    if(n > arr.length){
        return arr;
    }
    return arr.slice(-n)
}

console.log(myFunction([1, 2, 3, 4, 5], 2));