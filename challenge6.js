// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(num) {
    let str =  num.toString();
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(parseInt(str[i]));
    }
    return arr;
    
}


console.log(myFunction(193278));

