// again we are the require the handling more request 
const express = require('express') ; 

// creating the function 

const server = express() ; 

// now creating the server 

server.get('/' , (req , res , next)=>{

    console.log('this is the my fist printing ') ; 
    next() ; 
})
server.get('/' , (req , res , next)=>{

    res.send('now this is the second response') ; 
})


// now creating the server liston 
server.listen(5000 , ()=>{
    console.log('now server are the started ') ;
})