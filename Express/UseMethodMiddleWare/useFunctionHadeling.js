// now creating the learning and use and the handling 
const express = require('express') ; 

// creating the function 

const server = express() ; 

// now creating the function 


function bookData(req , res , next){

    console.log('this is the calling for the book data ') ; 
    next() ; 

}
function LoadData(req , res , next){
    console.log('this calling for the lode data ') ; 
    next() ; 
}

function UserAuthentication(req , res , next){
    console.log('this is the userAuthentication ') ; 
    next() ; 
}

// now calling for the get 
