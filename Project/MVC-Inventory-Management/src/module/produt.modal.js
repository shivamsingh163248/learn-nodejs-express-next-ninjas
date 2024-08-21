// creating the product modal are the using 
// creating the function 
import path from "path";

// creating the class 
export default class productModule{

    // creating the contactor 
    // CREATING ALL THE VALUE 
    constructor(_id , _name , _desc , _pri , _imgUrl){
         
        // now set the value 
        this.id = _id  ; 
        this.name = _name ; 
        this.desc = _desc ; 
        this.pri = _pri ; 
        this.imgUrl = _imgUrl ; 

    }

  // creating the function of the get using the static method
  static get(){
        
    // hear we are the return the get method 
    return product ; 
    // now hear is return 
    // hear is the return all the function which are required 
  } 

  // creating  the static function for the writing the modal 
    static addProduct(objectAdd){
       
      // crating the object 
      let addProduct = new productModule(
        // now creating the set the value 
        
      )
    }

}


// creating the array of the product 
var product = [
    new productModule(1 , 'product1' ,"fist product" , 37.5 , "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" ),
    new productModule(2 , 'product2' ,"second product" , 34.5 , "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" ),
    new productModule(3 , 'product3' ,"third product" , 30.5 , "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" ),
    new productModule(4 , 'product4' ,"fourth product" , 56.5 , "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" )
    
]


