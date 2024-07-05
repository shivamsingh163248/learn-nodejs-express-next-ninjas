
// creating a module for the deleting 
const fs = require('fs') ; 

// for the deleting we are the using unlink file 
// using the fs module for the unlink file 

 fs.unlink('FileModuleNonBlocking/shiv.txt' , (err)=>{
    console.log('this is the using for the unlink the file ')
    console.log(err) ; 
 })