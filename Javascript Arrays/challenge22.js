// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(arr) {
    let lngth = 0;
    let longest;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > lngth){
            lngth = arr[i].length
            longest = arr[i]
        }
    }
    return longest;
}
console.log(myFunction(['yessine', 'agrebi', 'longest string']));