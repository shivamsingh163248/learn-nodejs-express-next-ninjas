// creating the backend for the node js 

// for the accepting the http 
const server =   require('http') ;

// now creating the instance of the server 
server.createServer((req , res)=>{

    // in the response part to 
    res.write("this is the my server my name is shivam singh ") ; 

   // creating the condition to handle to multiple url 
   if (req.url == "/payment") {
    
    
   }


})