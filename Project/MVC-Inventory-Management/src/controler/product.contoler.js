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
  // res.send("thank you ") ; 
    return res.render("new-product" , {errorMessage : null}) ;
 }


  postNewProduct(req , res ,next){

  // creating the validation for the product 
  // creating the arrays of the errors
  // let errors = [] ;
  // // creating the object of the product
  // const{name , prise , imgUrl} = req.body ;
  // // checking the product name
  // if(!name || name.trim() == ''){
  //   errors.push("Please add the name of the product") ;    
  // }


  // // again pushing the error for the prise and conation to greater then 1 
  
  // if (!prise || parseFloat(prise) < 1) {
  //   errors.push("please the enter the prise") ; 
  // }

  // // creating and the testing the url 
  // try {
  //   const urlCheck = new URL(imgUrl) ; 
    
  // } catch (err) {
  //    errors.push("now insert the valid the url") ; 
  // }
  

  // // check the arrays length 
  // // creating the condition for the checking the arrays is the greater then 
  // if (errors.length > 0 ) {
    
  //   // now rendering  the length  values 
  //   return res.render('new-product' , {errorMessage : errors[0]}) ; 
  // }
  


    let product = new productModule() ;
    console.log(req.body) ;

    productModule.addProduct(req.body) ; 
    
    let printArrays  = productModule.get() ; 
    console.log(printArrays) ; 
     res.render("thank"); 
    


  }

  
// Writing the function for the updating the value 
// creating the function post and product  // this is the using for the re-updating product and correction of the product 

 ReUpdatingProduct(req , res){

  productModule.addUpdating(req.body) ; 
  let product = productModule.get() ; 
  // now console product 
  // console.log(product) ; 

//  return  res.sendFile( path.join(path.resolve() , 'Project' , 'MVC-Inventory-Management' ,'src','view','products.html')) ; 
  res.render("products" , {products : product}) ; 

 }

  

postAddProductUpdate(req , res , next){
  // checking the id is available 
  const id = req.params.id ;
  // const{id} = req.body ; 
  // now checking the id exist or not 
  const productFound = productModule.getByID(id) ; 
   
  if (productFound) {
     
    // if this is the true now updating the product 
    res.render("update-product" , { products:productFound , errorMessage : null })
  }else{
    res.send('product not found ') ; 
  }
}
  
}

