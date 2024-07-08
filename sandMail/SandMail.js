// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import { stdin, stdout } from 'process';
import readline from 'readline';

const Solution = () => {
  // Write your code here

 const value =  readline.createInterface({
    input: stdin,
    output: stdout
  });

  // now creating the ask question form the console 
  value.question('please enter your email ' , (input)=>{

    // now calling the function with the string 
    sandMail(input) ; 
     
  })
 async function sandMail(email){
    
 // fist we are the creating the mail 
  const transport = nodemailer.createTransport({

  // creating the object 
  service : 'gmail' , 
  auth :{
  user : 'codingninjas2k16@gmail.com',
  pass : 'slwvvlczduktvhdj'
  }

 }) ; 

 var mailOption = {

  from : 'codingninjas2k16@gmail.com',
  to : email , 
  subject : "Coding Ninjas" , 
  text : "The world has enough coders; be a coding ninja!"
 } 

 // now we are the sanding the mail 
 try {
  const result  = await transport.sendMail(mailOption) ; 
  console.log(`Success : Email sand to ${email}`) ; 
  
 } catch (error) {
  console.log(error) ; 
  
 }
 



 }


};

export default Solution;
