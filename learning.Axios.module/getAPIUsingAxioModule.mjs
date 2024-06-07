
import axios from "axios";
// creating the function 
function async(){

    // axios have the tree type of the request get put and post 
    axios.get('https://api.codingninjas.com/api/v3/event_tags') 
    .then(Response =>{
      console.log(Response.data) ; 
    })
    .catch(err =>{
        console.error(err) ; 
    })


}
// calling the function and the function also export 
async() ; 
export {async} ; 