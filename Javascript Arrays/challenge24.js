// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(arr1, arr2) {
    let duplicate = [...arr1,...arr2];
    let removedVal = Array.from(new Set(duplicate));
    return removedVal.sort((a,b) => {
        return a - b;
    })

}

console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));











