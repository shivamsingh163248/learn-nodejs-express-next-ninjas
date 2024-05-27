// now learning the multiple request handale in the js 
// how the server the handale the multiple request 
const http = require('http') ; 

// creating the instance of the server of the node \
const server = http.createServer((req, res)=>{

    // there are the two variable in the node
    // now printing on the console
    // creating the multiple request 
    if(req.url == "/user"){
        // write the server 
        res.end("this is the my user request ") ; 
        // also using the write method 
        res.write("this is write method are the using ") ; 
    }else if(req.url == "/payment"){
        // in this way the  handling the request 
        res.write("this is the write method in the payment "); 
        res.end("this is the payment url ") ; 
        // again we are the write the  
        
    }

    console.log(req.url) ; 
    
    res.end("this is the givne the responve of the server ") ; 

})

// define the post number 
// creating the definig the post number 
  server.listen(3100,()=>{
    console.log("now server are the getting start ") ; 
  })