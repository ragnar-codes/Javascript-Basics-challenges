// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(arr1, arr2) {
    let merge = [...arr1,...arr2];
    return merge;
}

console.log(myFunction([true, true], [4,5,6]));