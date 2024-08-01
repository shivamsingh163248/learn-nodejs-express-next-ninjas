// Import the necessary modules here
// hear we are the necessary  module are the importing hear
import ProductModel from "../models/product.model.js";

const product = new ProductModel() ; 
export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    // now handel the response 
    res.json(product.fetchProducts()) ;   
  };
}
