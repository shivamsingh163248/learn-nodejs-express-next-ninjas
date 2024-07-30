// creating the object of the controller 

import path from "path";
import productModule from "../module/produt.modal";

// creating the class 

 export default class product {

// creating the function of th product controller
// using the static method 



  productController(req  , res){

    // creating the path of the current dir using the path module 
   return  res.sendFile( path.join(path.resolve() , 'Project' , 'MVC-Inventory-Management' ,'src','view','products.html')) ; 
     
 }


 }
