// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
    var second = arr[0];
    var result = true;
    for(let first = 0; first < arr.length; first++){
        if(second !== arr[first]){
            result = false;
        }
    }
    return result;
}

console.log(myFunction([10,10,10,10]));
