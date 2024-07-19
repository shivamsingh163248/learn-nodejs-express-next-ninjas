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


