// creating the object of the controller 

import path from "path";

// creating the class 

 export default class product {

// creating the function of th product controller
  productController(req  , res){

    // creating the path of the current dir using the path module 
   return  res.sendFile( path.join(path.resolve() , 'Project' , 'MVC-Inventory-Management' ,'src','view','products.html')) ; 
     
 }


 }
