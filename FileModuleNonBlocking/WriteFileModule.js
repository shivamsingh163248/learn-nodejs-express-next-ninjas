
// learning the file system and write 
const fs = require('fs') ; 
// creating the file 
 fs.writeFile('FileModuleNonBlocking/shiv.txt' , 'name : shivam singh ' ,  (err)=>{
     try {
        console.log('this is the working perfectly ') ; 
     } catch (error) {
        console.log(err) ; 
     }
 })

 // creating another thing for the checking for the un-blocking code 
 console.log('this is working the before ') ; 
