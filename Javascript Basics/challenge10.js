// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(str1, str2) {
    return str1.replace(/[^a-zA-Z ]/g, "") + str2.replace(/[^a-zA-Z ]/g, "").split("").reverse().join("") ;
     
}


console.log(myFunction("Java%", "t%p$irc+s"));