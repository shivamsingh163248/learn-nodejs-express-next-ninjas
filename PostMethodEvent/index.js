// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here

  // creating the condition if the request is the post 
  if (req.method == 'POST') {
    
    // apply all the algo hear 
    // using the event on the on and the data 
   let data = '' ; 
    req.on('data' , (chunk)=>{
      data += chunk ; 
    }) ; 

    req.on('end',()=>{

      // now appending the data in the data the text 
      fs.appendFileSync('data.txt' , data) ; 
      // now we are the reading the data the sync 
      
      const value = fs.readFileSync('data.txt', {encoding : 'utf-8'}) ; 
      console.log(value) ; 
      res.end("data received");
    })

  }else{
    // handle the request if the data are the non post method 
    res.end('this is the not a post method ') ; 

  }


});

export default server;
