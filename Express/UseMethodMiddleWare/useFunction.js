// now we are the handle the using the middle ware in the express 
// learning the use function to excite any path 
const express = require('express') ; 

// now creating the server 
const server = express() ; 

// now creating the function 

function sandMessage(req , res , next){
  console.log('this is the function of the sand message ') ; 
  next() ; 
}

// now creating the second message 
function sandMail(req , res , next){
  console.log('this is the function for the sanding the mail') ; 
  next() ; 
}

function callingApi(req , res , next){
  console.log('this is the calling the Api') ; 
  next() ; 
}

// now creating get request 
server.get('/' , sandMessage , sandMail , callingApi , (req ,res)=>{
  res.send('now this is the the response ') ; 
})


// now creating the server liston function 
server.listen(3100 , ()=>{
  console.log('now server are the getting started ') ; 
})