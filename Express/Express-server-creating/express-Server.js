// now creating the and the learning the express 

const express = require('express')

const server = express() ; 



server.get("/",(req, res)=>{
   res.send('welcome is the express server  my name is shivam singh this is using the nodemon to checking the starting server ') ;

   // res.sand like the end 
 //  res.end('now this is the ending the response')   ; 
})


//now creating the server for the liston the port 
server.listen(5100 , ()=>{
    console.log('now server is the getting started ') ; 
})
