// creating the object of the controller 

import path from "path";
import productModule from "../module/produt.modal.js";


 export default class product {

  productController(req  , res){

    let product = productModule.get() ; 
    // now console product 
    // console.log(product) ; 

  //  return  res.sendFile( path.join(path.resolve() , 'Project' , 'MVC-Inventory-Management' ,'src','view','products.html')) ; 
    res.render("products" , {products : product}) ; 
  
     
 }
 addNewProduct(req , res){
    return res.render("new-product") ;
 }


  postNewProduct(req , res ,next){

  // creating the validation for the product 
  // creating the arrays of the errors
  let errors = [] ;
  // creating the object of the product
  let product = req.body ;
  // checking the product name
  if(!product.name){
    errors.push({text : "Please add the name of the product"}) ;    
  }


    let product = new productModule() ;
    console.log(req.body) ;

    productModule.addProduct(req.body) ; 
    let printArrays  = productModule.get() ; 
    console.log(printArrays) ; 
     res.render("thank"); 
    


  }
}

