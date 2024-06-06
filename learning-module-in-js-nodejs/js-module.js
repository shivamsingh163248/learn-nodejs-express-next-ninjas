// learning the module 

// creating the two function 
function sum(a , b){
    return a+b ; 

}

function multiply(a,b){
    return a*b ; 
}


// two way to creating the module to use this file in the another file 

// frit way to export their module 
// module.exports = {
//     sumFunction : sum 
// }
module.exports = {
    sumFunction : sum ,
    multi : multiply  
}

// again writing the second way 


// different way to export the module 
// creating the divide function 
module.exports.divide = (x,y)=>{
    // hear only the property can be export 
    return x/y ; 
}
