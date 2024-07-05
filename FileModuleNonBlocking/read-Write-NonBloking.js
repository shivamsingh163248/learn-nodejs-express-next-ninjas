
// learning all the operation of the fs module 

const fs = require('fs') ; 

// creating the file using the fileWrite 
fs.writeFile('FileModuleNonBlocking/is.txt' , 'miss you so much today date is 5:07:2024' , (err)=>{
    console.log('file has been successful created ') ; 
})

// we are the reading something from the file 
fs.readFile('FileModuleNonBlocking/is.txt' , ( error , read)=>{
    // now printing the read 
    console.log(read) ; 
    // this will changed in the string using the to string 
    console.log(read.toString()) ; 
})

// now something append in the file system 
fs.appendFile('FileModuleNonBlocking/is.txt' ,'\n your birthday is really nearest '  , (error)=>{
   console.log('we are the appending something ') ; 
   fs.readFile('FileModuleNonBlocking/is.txt' , ( error , read)=>{
    // now printing the read 
    console.log(read) ; 
    // this will changed in the string using the to string 
    console.log(read.toString()) ; 
})

// now are the deleting the file 
fs.unlink('FileModuleNonBlocking/is.txt' , (error)=>{
    console.log('this is the unlink the file ') ; 
})


})
