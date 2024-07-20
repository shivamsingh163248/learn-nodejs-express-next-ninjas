
// creating the express server and handle the middle were in the express to handle the same url request more middle were 
// step 1 
const express = require('express') ; 

// now creating the function 
const server = express() ; 

// now using the get method 

server.get('/' , (req , res , next)=>{
    console.log("we are the not given any response ") ; 
        next() ; 
},
(req,res)=>{
    res.send("now sanding the response to server ") ; 
}
)

// now we are the creating the liston of the server 
server.listen(5100 , ()=>{
    console.log("server are the started ") ; 
})





