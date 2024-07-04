// learning the encoding file using the utf-8 that are the using the file 
// step 1  require 
const fs = require('fs') ; 

// that file using the sync 
const value = fs.readFileSync('ReadFileSystem/itisha.txt'  , {encoding : 'utf-8'}) ; 

// now printing the value on the console 
// utf-8 are the in the 
console.log(value) ; 