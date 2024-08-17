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
  //  return  res.sendFile( path.join(path.resolve() , 'Project' , 'MVC-Inventory-Management' ,'src','view','products.html')) ; 
    res.render("products" , {products : product}) ; 
    // this is the using for the product rendering 
    // we are the updating the soon a new problem 
     
 }
 addNewProduct(req , res){
    // creating the object of the product 
   // rendering the response 
    res.render("new-product") ;

 }

 // now we are the handling the post request 
  postNewProduct(req , res){
      // creating the object of the product 
      // creating the object of the product 
      let product = new productModule(req.body.id , req.body.name , req.body.desc , req.body.pri , req.body.imgUrl) ; 
      // now we are the pushing the product 
      product.push(product) ; 
      // now we are the redirecting the product 
      res.redirect('/products') ; 
  }
  
    // creating the function of the get using the static method
    static get(){
          
      // hear we are the return the get method 
      return product ; 
      // now hear is return 
      // hear is the return all the function which are required 
    }

 }
