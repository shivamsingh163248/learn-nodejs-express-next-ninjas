const readline = require('readline');
// creating the interface of the module that have the object 
// for the testing the 
// const value = require('./ReadingConsoleInput') ; 
// console.log(value.sum(4,5)) ; 

 const value = readline.createInterface({
    input : process.stdin,
    output : process.stdout
 });

 // creating the function 
 value.question("what is your name ?" , (name) => {
    console.log("your name is " + name) ;
    interface.close() ;
}) ;
