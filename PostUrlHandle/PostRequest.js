
// now creating the server 
// using the http module to creating the server 
const http = require('http') ; 

// now creating the server 
const server = http.createServer((req , res)=>{


// now handle the request 
console.log(req.url) ; 
   if (req.url = '/isu') {
    

    // in the response we are the given the 
    res.end('this is the isu path we are the using ') ; 


   }

})

// now creating the port liston 
server.listen(3100 , ()=>{
    console.log('now server are the started ')
})
