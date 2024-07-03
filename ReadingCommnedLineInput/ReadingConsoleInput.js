// learning the input form the console using the module readline that are using the read console

const readline = require("readline") ;






//creating interface for the readline
const interface =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 interface.question("what is your name ?" , (name) => {
     console.log("your name is " + name) ;
     interface.close() ;
 }) ;



 // using the ex
  

 