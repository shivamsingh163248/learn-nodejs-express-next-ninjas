// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs') ; 

const Solution = () => {
  // Write your code here
  //  creating the file using the fs module 
  fs.writeFileSync("notes.txt","The world has enough coders") ; 
  // now reading the file 
  const value = fs.readFileSync("notes.txt" , {encoding:'utf-8'}) ; 
  // printing on the console 
  console.log(value) ; 
  // now appending the  writing content 
  fs.appendFileSync("notes.txt"  ,"BE A CODING NINJA!" ) ; 
  const value1 = fs.readFileSync("notes.txt" , {encoding:'utf-8'}) ; 
  // printing on the console 
  console.log(value1) ; 

};
Solution();