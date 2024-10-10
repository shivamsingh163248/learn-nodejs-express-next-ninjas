// creating the server using the express 
import express from 'express'
import path from 'path'; 
import product from './src/controler/product.contoler.js';
import ejsLayouts from 'express-ejs-layouts' 
import addNewProduct from './src/middleware/validation.middleware.js';


// creating the server 
const server = express() ; 

// this is the using for the 
server.use(express.urlencoded({extended:true})) ; 

// now hear we are the defining the ejs 
server.set('view engine'  , "ejs") ; 
server.set('views' ,  path.join(path.resolve() , 'Project' , 'MVC-Inventory-Management' ,'src','views')) ; 
console.log(path.resolve()) ; 
// now using the to set the server layout that is the framework of the express 
server.use(ejsLayouts) ; 
// now creating the server using the get 
server.use(express.static('./Project/MVC-Inventory-Management/src/view')) ; 


server.get('/' , (req  , res , next)=>{
    console.log(path.resolve()) ; 
    next() ; 
})

// creating the object 
const  test = new product() ; 

server.get('/', test.productController ) ; 
// creating the for the add product
server.get('/new', test.addNewProduct) ;


// now we are the handling the post request 
server.post('/sub' , addNewProduct , test.postNewProduct) ;
server.get('/updating/:id' , test.postAddProductUpdate  ) ; 

server.post('/updatingNewProduct' ,test.ReUpdatingProduct )
   
// now creating the server liston 
server.listen(3000 , ()=>{
    console.log('now server is the getting started ') ; 
})

// creating and the learning the lots of the function and the post that are the using and for the learning the value of the post 

