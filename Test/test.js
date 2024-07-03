const { stdin, stdout } = require('process');
const ans = require('readline')  ; 
const value = ans.Interface({
    input : stdin ,
    output : stdout
})


 value.question('enter your name ' , (name)=>{
      
    value.question('enter your age' , (age)=>{
        console.log(name+" "+age ) ; 
    })
 })