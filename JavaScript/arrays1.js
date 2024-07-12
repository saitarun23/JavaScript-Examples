let prompt =require('prompt-sync')();

let menu={
    burger :100,
    noodles : 200,
    pizza : 200,
    fries :50,
    cola : 80
}

let cart=[]

console.log("cart["+cart.length+"] details: "+cart);

// let choice=prompt("Enter your choice ")
// console.log("your choice: "+choice);

while(true){
    let dishName=prompt("Enter Dish Name: ")
    
    if(dishName=="quit"){
        break
    }

    let dish={
        name:dishName,
        price:menu[dishName]
    }
    cart.push(dish);
}

console.log("Final Cart["+cart.length+"] Details: "+cart);

for(let dish in cart)
    {
        console.log(dish);
    }