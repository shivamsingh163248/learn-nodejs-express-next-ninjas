import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached

    // now creating the loop and check the all the and the emit the event 
     this.progress += exercise.caloriesBurned ; 
   // console.log(exercise.caloriesBurned) ; 
   // console.log(this.progress) ; 

     

      if (this.progress >= this.goal) {
        this.emit('goalReached') ; 
      }


    
  }
}

const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal

  // creating the 

  // simulate adding exercise
    const tracker = new FitnessTracker() ; 
    tracker.addListener('goalReached' , ()=>{
      console.log("Congratulations! You have reached your fitness goal" ) ; 
    })

  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
 
};

Solution();

export { FitnessTracker, Solution };