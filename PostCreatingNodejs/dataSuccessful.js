
// fist we are the creating the server 
// require the http module 
const http = require('http') ; 
// now creating the server 
const  server = http.createServer((req , res)=>{

    // using the on and data and the end event listen using this 
    // creating the condition of the request 
    if (req.method == 'POST') {
        
        let data = '' ; 
        req.on('data',(chunk)=>{
           data += chunk ; 
        }) ; 
        req.on('end' , ()=>{
            console.log(data) ; 
            res.end('data receive  and the stored successful ') ;
        })
       } else {

        res.end('data are successful ')
        
    }
})


// hear are the creating the liston the port number 
server.listen(3100 , ()=>{
    console.log("server are the successful started ") ; 
})
