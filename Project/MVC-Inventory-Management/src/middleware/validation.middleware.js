
// creating the function of the middleware validation 

const poteenProduct = (req,res , next)=>{


    // creating the validation for the product 
  // creating the arrays of the errors
  let errors = [] ;
  // creating the object of the product
  const{name , prise , imgUrl} = req.body ;
  // checking the product name
  if(!name || name.trim() == ''){
    errors.push("Please add the name of the product") ;    
  }


  // again pushing the error for the prise and conation to greater then 1 
  
  if (!prise || parseFloat(prise) < 1) {
    errors.push("please the enter the prise") ; 
  }

  // creating and the testing the url 
  try {
    const urlCheck = new URL(imgUrl) ; 
    
  } catch (err) {
     errors.push("now insert the valid the url") ; 
  }
  

  // check the arrays length 
  // creating the condition for the checking the arrays is the greater then 
  if (errors.length > 0 ) {
    
    // now rendering  the length  values 
    return res.render('new-product' , {errorMessage : errors[0]}) ; 
  }
  next() ; 

};

// exporting the module 
