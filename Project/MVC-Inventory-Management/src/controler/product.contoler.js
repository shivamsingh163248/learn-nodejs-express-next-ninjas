// creating the object of the controller 

import path from "path";
import productModule from "../module/produt.modal.js";

// creating the class 

 export default class product {

// creating the function of th product controller
// using the static method 
// creating the product module 



  productController(req  , res){

    let product = productModule.get() ; 
    // now console product 
    console.log(product) ; 

    // creating the path of the current dir using the path module 
   return  res.sendFile( path.join(path.resolve() , 'Project' , 'MVC-Inventory-Management' ,'src','view','products.html')) ; 
     
 }


 }
