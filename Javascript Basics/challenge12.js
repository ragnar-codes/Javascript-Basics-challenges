// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(str1, str2) {
    let count = 0;
    for(let i = 0; i < str2.length; i++){
        if(str1 == str2[i]){
            count++;
        }
    }
    return count;
 }

console.log(myFunction("e", "yessine"));