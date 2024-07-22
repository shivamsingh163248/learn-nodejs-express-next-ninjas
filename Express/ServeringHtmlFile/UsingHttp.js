
const http = require('http') ;
const fs = require('fs');
 

// now creating the sever 

const server = http.createServer( (req , res)=>{

// now creating the fs module to read file 
// creating the fs module to read file 

const file = fs.readFileSync("./Express/ServeringHtmlFile/public/index.html").toString() ; 
// now ending the response 
res.end(file) ; 
})


// now creating the for the server liston
server.listen(5100 , ()=>{
   console.log('server are the getting started ') ; 
})
