// creating and the importing all the 
import http from 'http'
import fs from 'fs'
import nodemailer from 'nodemailer'
import Event from 'events'

// creating the import the event hear is the event emitter 


// creating the class for the event 
class event extends Event.EventEmitter {
    // creating the function after the calling the event emitter 
    sandMail(email) {
        this.emit('sandMail', email);
    }
}

// now creating the class 

const FirstEvent = new event();

// creating the server using the http module that are using to creating the server 
const https = http.createServer((req, res) => {

    // using the node mailer using the node 
    // nodemailer is the extension of the sanding the mail this is the using the npm install nodemailer 
    // that is the name of the transporter  
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "codingninjas2k16@gmail.com",
            pass: "slwvvlczduktvhdj",
        },

    });





    // we are the handling server 
    if (req.method == 'POST') {

        if (req.url == '/mailSand') {


            // creating the nodemailer 
            let value = '';
            req.on('data', (chunk) => {

                value += chunk;
            })

            // now we are the using the end method 

            req.on('end', () => {

                // we are the changing the value in the jason form 
                const jasonData = JSON.parse(value);

                // now we are the printing 
                // we are the spiting the object 
                const { name, email, message } = jasonData;
                //we are the directly access the data 
                // now we are the storing the data as the string 
                const quarryString = `name: ${name}\nEmail : ${email}\nMessage: ${message}`;
                // now printing on the console 
                console.log(quarryString);

                // using the fs module creating the file 
                fs.writeFileSync('D:/learn-nodejs-express-next-ninjas/EventDravin/shiv.txt', quarryString);

                // now we are the updating the file and the given the response 
                res.end('now successful update the file ');



                // now creating the mail option 
                // this are using the passing the parameter in the sand option in transposer 
                const mailOption = {
                   from : "codingninjas2k16@gmail.com",
                   to : email,
                   subject : "Coding Ninjas",
                     text : message
                 }


                 
                 // now we are the sanding the mail 
                    transporter.sendMail(mailOption , (error , info)=>{
                        if (error) {
                            console.log(error) ; 
                        } else {
                           FirstEvent.sandMail(email) ; 
                        }
                    })



            })



        }


    }

})


// now we are the creating the event listener
FirstEvent.on('sandMail', (email) => {
    console.log(`email sand to ${email}`)
})


// now hear the setup the server liston file 
https.listen(5100 , ()=>{
    console.log('now server are the started ')
})
