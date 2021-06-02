// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return (sum / arr.length);
}

console.log(myFunction([10, 100, 40]));