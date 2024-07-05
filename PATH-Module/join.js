// creating the file and using the path we are the not hardcoding 
const fs = require('fs') ; 
const path = require('path') ; 

const url = path.join('PATH-Module' , 'story.txt') ; 
console.log(url) ; 

fs.readFile(url , (err , read)=>{
    console.log(read) ;
   // now printing in the string formet using the tostring
   console.log(read.toString()) ;  
})