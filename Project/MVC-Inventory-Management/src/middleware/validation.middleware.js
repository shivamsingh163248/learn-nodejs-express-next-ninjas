
// creating the function of the middleware validation
import {body , validationResult} from 'express-validator' 

const addNewProduct = async(req,res , next)=>{

  console.log(req.body)
  const rule  = [
  // creating the rule 
    body('name').notEmpty().withMessage("name is the Empty"),
    body('prise').isFloat({gt : 0}).withMessage("prise is not empty ") , 
    // now set the rule 
    body('imgUrl').isURL().withMessage('prise is not url')
  ] ; 
  // all the set in the rule 
  await Promise.all(rule.map(rule=> rule.run(req))) ;  

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
  
var validationerror = validationResult(req)
  // check the arrays length 
  // creating the condition for the checking the arrays is the greater then 
  // now hear is printing is the validation error 
  console.log(validationerror) ; 
  if (!validationerror.isEmpty() ) { 
    // now rendering  the length  values 
    return res.render('new-product' , {errorMessage : validationerror.array()[0].msg }) ; 
  }
  next() ; 

};

// exporting the module 
export default addNewProduct ; 

// now updating the profile 