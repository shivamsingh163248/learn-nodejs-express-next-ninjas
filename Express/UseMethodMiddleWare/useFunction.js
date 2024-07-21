// now we are the handle the using the middle ware in the express 
// learning the use function to excite any path 
const express = require('express') ; 

// now creating the server 
const server = express() ; 

// now creating the function 

function sandMessage(req , res , next){
  console.log('this is the function of the sand message ') ; 
}
