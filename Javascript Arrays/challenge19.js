// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(arr, num) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != num){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(myFunction([1,2,3,2,5], 2));