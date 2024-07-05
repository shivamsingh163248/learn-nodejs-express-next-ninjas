
// using the extension we are the getting the extension using the path 
const path = require('path') ; 
// frit we are the getting the path using the join 
const url = path.join('PATH-Module' , 'story.txt') ; 
const extension = path.extname(url) ; 

// now we are the consoling the value of the path 
console.log(extension) ; 