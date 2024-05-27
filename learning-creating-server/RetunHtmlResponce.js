// now creating the html given as the response 

// step 1 required the http module 
const http = require('http') ; 

// now creating the instance of the server that have the res and response 

// for the fil using the fs module 
const fs = require('fs') ; 

const server = http.createServer((req , res)=>{
   
    const output = fs.readFileSync("index.html").toString ; 
    // now we are the using the output the value 
    
})

// creating the port number where the server is the liston 
server.listen(3100 , ()=>{
    console.log("now server are the getting the stated ") ; 
})