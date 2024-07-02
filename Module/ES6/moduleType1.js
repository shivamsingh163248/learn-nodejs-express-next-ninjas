// creating the and the learning the normal module

// creating the function 
function sum(a,b){
    return a+b ; 
}
function min(a,b){
    return a-b ; 
}

const obj1 = {
    name : "shivam singh",
    address : "nadihar rajgarh mirzapur ",
    pinCode : 3434 , 
    college : "veer bahadur singh purvanchal university "
}

module.exports = {
    sums : sum,
    mins : min,
    obj :obj1
}