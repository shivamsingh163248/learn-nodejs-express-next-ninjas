// creating the backend for the node js 

// for the accepting the http 
const http =   require('http') ;

// now creating the instance of the server 
const server = http.createServer((req , res)=>{

    // in the response part to 
    res.write("this is the my server my name is shivam singh ") ; 

   // creating the condition to handle to multiple url 
   if (req.url == "/payment") {
    
    return res.end("this is the payment method ") ; 

   }else if (req.url == "/user") {
    return res.end("this is the user services ") ; 

   }


})


// creating the listion port 

server.listen(3100 , ()=>{
    console.log("the server is the listen of the port on the 3100") ; 
})