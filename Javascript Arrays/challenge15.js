// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction(arr) {

    return arr.sort((a, b) => {
        return (b-a);
    } );
}

console.log(myFunction([4, 6, 7, 9, 1, 2, 5, 10]));