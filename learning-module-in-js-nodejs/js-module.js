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
    sumFunction : sum 
}
