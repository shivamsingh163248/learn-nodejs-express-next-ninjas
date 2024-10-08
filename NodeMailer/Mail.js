
// step 1 
const nodemailer =  require('nodemailer');

 
// nodemailer to creating the transport for the using for the transport 



// var transporter = nodemailer.createTransport({
//     service: 'smtp.hostinger.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'support@lovelymobilecenter.store',
//       pass: 'Itisha@2550'
//     }
//   });

// var mailOptions = {
//     from: 'support@lovelymobilecenter.store',
//     to: 'shivamsingh163248@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

// creating the function of the sand mail 
async function sandMail(){
    
 // using the nodemailer 
var transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'support@lovelymobilecenter.store',
      pass: 'Itisha@2550'
    }
  });
  var mailOptions = {
    from: 'support@lovelymobilecenter.store',
    to: 'anujsingh122002@gmail.com', 
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  // in the try catch we are the using for the sanding mail 
  try {
 const result  = await  transporter.sendMail(mailOptions) ; 
 console.log(result) ; 
 console.log("sand mail successful ")  
  } catch (error) {
    console.log(`this is the error message ` + error) ; 
  }



}

// using the 
sandMail()  ; 

