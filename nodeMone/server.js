
// using the https to creating the server 

const server = require('http') ; 
 
 const value = server.createServer((req, res) => {
     res.write("hello world this is the mys server") ; 
     res.end() ; 
 }) ;

 // creating the port listen 
    value.listen(8000 , ()=> {
        console.log("server is running on the port 8000") ;
    }) ;
    