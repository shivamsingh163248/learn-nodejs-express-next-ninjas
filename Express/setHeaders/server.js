// now we are the importing the module 

const serverPort = require('./setHeaders') ; 




serverPort.server.listen(5000 , ()=>{
    console.log("server are the getting the started") ; 
})