// creating the server using the express module 
// express module are the using the to creating the server 

const express = require("express")
// it is the returning the function in the module 
const server  = express() ; 

server.get('/' , (req , res)=>{


    // now hear we writing the res 
    res.send("this is the my fist express server ") ; 
    // this sand method are the using the sand the request 
})

//  now exporting the server 
module.exports = {server} ; 