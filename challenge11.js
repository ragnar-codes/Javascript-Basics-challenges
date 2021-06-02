// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction(number, percentage) {
    let result = (number * percentage) / 100;
    if(Number.isInteger(result)){
        return result;
    }else {
        return result.toFixed(2);
    }
}

console.log(myFunction(500, 99));