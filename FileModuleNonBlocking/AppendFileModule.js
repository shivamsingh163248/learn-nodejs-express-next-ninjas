//  Node creating append 
const fs = require('fs') ; 

//  creating the append module 

fs.appendFile('FileModuleNonBlocking/shiv.txt','\n  name : itisha singh ' , (err)=>{
    // using the try catch 
    try {
        console.log('now we are the append the value') ; 
    } catch (error) {
        console.log(error) ; 
    }
})