const express = require('express') ; 
const fs  = require('fs') ; 


// now creating the server 
const server = express() ; 


server.use( express.static('./Express/ServeringHtmlFile/public')  ) ; // checking the directory  
server.get('/' , (req , res)=>{
   
    // now creating the for the the response
    res.send('this is the successful') ; 
})

server.listen(5100 , ()=>{
    console.log('now server are the getting started') ; 
})

//