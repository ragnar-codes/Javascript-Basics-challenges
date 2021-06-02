// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(num) {
    if (num % 2 !== 0){
        return num;
    }else{
        return num + 3;
        }
    }


console.log(myFunction(2000));