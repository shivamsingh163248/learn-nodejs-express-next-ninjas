// creating the the server in  the node js 
// node js is the single thread language 


// now creating the server using the node 
  const http = require('http') ; 
  
  // now https have the method  
 const server =   http.createServer((req , repo) => {
    repo.end("this is the my server");

   })

   // step 2 in this the Liston in the liston the port number 
   server.listen(3100,()=>{
    console.log("now server is the getting the started") ;
   })