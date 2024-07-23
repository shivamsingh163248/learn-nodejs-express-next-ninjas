// creating the server using the express 
const express = require('express') ; 
const fs = require('fs') ; 
const path = require('path') ; 


// creating the server 
const server = express() ; 

// now creating the server using the get 
server.use(express.static('./Project/MVC-Inventory-Management/src/view')) ; 




server.get('/', (req , res)=>{

    res.send('this is the fist response') ; 

})

// now creating the server liston 
server.listen(5100 , ()=>{
    console.log('now server is the getting started ') ; 
})

