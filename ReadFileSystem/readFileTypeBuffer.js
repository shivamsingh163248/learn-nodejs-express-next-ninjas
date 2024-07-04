// creating and the learning the using the buffer without the encoding using the buffer.string to read file 
const fs = require('fs') ; 

// creating the sync function for the reading the file 
  var buffer = fs.readFileSync('ReadFileSystem/itisha.txt');

   console.log(buffer);

   // again its converted into the string using the string 
   console.log(buffer.toString());
