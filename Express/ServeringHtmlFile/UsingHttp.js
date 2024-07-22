
const http = require('http') ;
const fs = require('fs');

// now creating the sever 

const server = http.createServer((req , res)=>{

// now creating the fs module to read file 
// creating the fs module to read file 
const file = fs.readdirSync('./public/index.html').toString() ; 
// now ending the response 
res.end(file) ; 

})


// now creating the for the server liston

