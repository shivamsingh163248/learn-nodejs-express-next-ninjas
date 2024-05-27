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
    }

    console.log(req.url) ; 
    
    res.end("this is the givne the responve of the server ") ; 

})

// define the post number 
// creating the definig the post number 
  server.listen(3100,()=>{
    console.log("now server are the getting start ") ; 
  })