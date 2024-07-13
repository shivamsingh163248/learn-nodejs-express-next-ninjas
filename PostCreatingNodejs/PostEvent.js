// now learning the post event 
// fist we are the creating the server 

const http = require('http') ;

const server = http.createServer((req , res)=>{

    if (req.method == POST) {
        
        let body = '' ; 

        req.on('data' , (chunk)=>{
            body += chunk.toString() ; 

        })

        // again we are the writing the chung 
        req.on('end' , ()=>{
            console.log(body) ; 
            // and printing the data successful 
            console.log('data are the successful stored ')  ; 
            res.end('data revived successful ') ; 
        })
    }
        
    res.end('this is the end of the ') ; 
  


})

// hear we are the creating for the liston the server 
server.listen(3000 , ()=>{
    console.log('server are the starting ') ; 
})



