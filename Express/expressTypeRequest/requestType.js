// now we are the learning the request type 
const express = require('express') 

// creating the function 
const server = express() ; 


// now creating the type of the request 
server.get('/' , (req , res)=>{
   
    res.send('this is the get server ') ; 
}) 

server.post('/' , (req , res)=>{
    console.log('this is the post request') ;
    res.send('this is the post request') ;  

})
server.put('/' , (req , res)=>{
  console.log('this is the put request') ; 
  res.send('this is the put request') ; 
})

server.delete('/' , (req , res)=>{
    console.log('this is the deleted request') ; 
    res.send('this is the deleted request') ; 

}) 

// now creating the for the server for the liston 

server.listen(5100 , ()=>{
    console.log('now server are the getting started ') ; 

})
