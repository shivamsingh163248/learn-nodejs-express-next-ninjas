// now creating the read file module 
const fs = require('fs') ; 
 // creating the file using the read there are the three parameter 
fs.readFile('FileModuleNonBlocking/shiv.txt' ,(err,data)=>{
    console.log('this is the data that we are the append ') ; 
    console.log(data.toString()) ; 
    try {
        console.log('this is not error ') ; 
    } catch (error) {
        console.log(err) ; 
    }
}) 