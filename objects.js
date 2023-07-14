const user = {
    name : 'Akash',
    email : 'akashkumarlko@gmail.com',
    password : '87254'
};
 console.log(user.email);
 console.log(typeof user);

 console.log(user['password']);

 user.address = 'Lucknow';

 console.log(user);

 user.password = 'abrakadabra';

 console.log(user);

 for(let k of Object.keys(user)){
    console.log(k);
 }

 for(let k of Object.entries(user)){
    console.log(k);
 }




 const laptop = [
    { brand: "HP", model: "Pavilion", price: 69999, colors: ["black", "sliver"]},
    { brand: "Lenevo", model: "Thinkpad", price: 56999, colors: ["black"]},
    { brand: "ASUS", model: "Ultrabook", price: 75999, colors: ["black", "silver"]},
    { brand: "Acer", model: "Aspire", price: 50999, colors: ["white", "blue"]},
 ];

//  syntax to get the prices of ultrabook
console.log( laptop[2].price );

//  syntax to replace sliver color with gray in ultrabook
laptop[2].colors[0]='gray';
console.log( laptop);

for(let lap of laptop ){
    console.log(lap.brand);
}

//  syntax to filter laptops having price less than 70000

const res1 = laptop.filter( (l) => {return l.price <60000});

console.log(res1);

//  syntax to filter laptops having black color

console.log( [ 'red', 'blue', 'black'].includes('black'));

const res2 = laptop.filter( (lappy) => {return lappy.colors.includes('black')});
console.log(laptop);
console.log(res2);


