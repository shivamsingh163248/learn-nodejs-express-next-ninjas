// creating and the importing all the 
import http  from 'http'
import fs from 'fs'
import nodemailer from 'nodemailer'
import Event from 'events'

// creating the import the event hear is the event emitter 


// creating the class for the event 
class event extends Event.EventEmitter{
    // creating the function after the calling the event emitter 
    sandMail(email){
        this.emit('sandMail' , email) ; 
    }
}

// now creating the class 

const FirstEvent = new event() ; 

// creating the server using the http module that are using to creating the server 
const https = http.createServer((req , res)=>{
    
    // using the node mailer using the node 
    // nodemailer is the extension of the sanding the mail this is the using the npm install nodemailer 
    // that is the name of the transporter  
   const transporter  =  nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "codingninjas2k16@gmail.com",
            pass: "slwvvlczduktvhdj",
          }, 

    });



// we are the handling server 
if (req.method == 'POST') {
    
  if (req.url = '/mailSand') {
    
      
    // creating the nodemailer 
    let value = '' ; 
    req.on('data' , (chunk)=>{

        value += chunk ; 
    })

    // now we are the using the end method 

    req.on('end' , ()=>{

        // we are the changing the value in the jason form 
        const jasonData = JSON.parse(value) ; 
         
        // now we are the printing 
        // we are the spiting the object 
        const{name , email , message} = jasonData ; 
        //we are the directly access the data 
        // now we are the storing the data as the string 
        const quarryString = `name: ${name}\nEmail : ${email}\nMessage: ${message}` ; 
        // now printing on the console 
        console.log(quarryString) ; 

    
    })



  }


}

})
