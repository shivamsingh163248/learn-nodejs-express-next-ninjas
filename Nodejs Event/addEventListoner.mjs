// now we are the importing the file 
import {PostEvent} from './createPost.mjs'

// user event is the object // now creating the object 

const  newUser = new PostEvent ; 

// now creating the function for the use 
function addDatabase(){
    console.log('we are the adding the data base ') ; 
    // now we are the adding the data base 

}

function sandMessage(){
  
    console.log('now this is the sand message  ') ; 
    // this function are the using for the sanding the message 
    
}

// again we are the creating the new function creating the post 
function addPost(){
    // this function are using for the adding the post 
    console.log('this is the using for the adding the post ') ; 

}


// now creating the event liston 
newUser.addListener("PostCreated" , addDatabase) ; 
// now creating the event 

// now we are the calling function two check 
newUser.CreatePost('this is the creating the post user') ; 

