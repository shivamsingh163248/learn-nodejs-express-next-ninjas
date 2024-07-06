// creating the  learning the js 
// creating the object 
const product = [
    {name : 'apple' , price : 154 , quantity : 2 },
    {name : 'apple' , price : 354 , quantity : 5 },
    {name : 'apple' , price : 400 , quantity : 3 },
];


// creating the total prise 
let total = 0 ; 

function totalPrice(product){
   
    for (const key in product) {
        
        total +=  (product[key].price * product[key].quantity ); 
    }

}

totalPrice(product) ; 
console.log(total) ; 