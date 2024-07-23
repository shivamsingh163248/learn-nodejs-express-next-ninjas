// creating the server using the express 
import express from 'express'
import path from 'path'; 
import product from './src/controler/product.contoler.js';


// creating the server 
const server = express() ; 

// now creating the server using the get 
server.use(express.static('./Project/MVC-Inventory-Management/src/view')) ; 


server.get('/' , (req  , res , next)=>{
    console.log(path.resolve()) ; 
    next() ; 
})

// creating the object 
const  test = new product() ; 

server.get('/', test.productController ) ; 

// now creating the server liston 
server.listen(5100 , ()=>{
    console.log('now server is the getting started ') ; 
})

