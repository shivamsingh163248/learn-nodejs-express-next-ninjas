// now learning the post event 
// fist we are the creating the server 

const http = require('http') ;

const server = http.createServer((req , res)=>{

    if (req.method == POST) {
        
    }
        
    res.end('this is the end of the ') ; 
  


})

// hear we are the creating for the liston the server 
server.listen(3000 , ()=>{
    console.log('server are the starting ') ; 
})



