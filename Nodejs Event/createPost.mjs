
// using the event module we are the creating the own event 
import * as  Events from 'events' ;


// creating the class for the the post to creating each post and save the data working with 

export class PostEvent extends Events.EventEmitter {

    // if we are the creating the function 
    //simple the write the name of the function 
    CreatePost(content){
        console.log('post is the created') ; 
       this.emit('PostCreated') ;  
    }

}
