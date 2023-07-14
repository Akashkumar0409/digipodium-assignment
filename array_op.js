const num = [2, 4, 62, 6, 2, 8];

// WAP to print square of all numbers in array

for(let i=0; i<num.length; i++){
    
   
    console.log(num[i] ** 2);
}

const newNum = [];

console.log('------------');
for(let n of num){
    // console.log(n**2);
    console.log(newNum);
    newNum.push(n**2);
}
console.log(newNum);

console.log('------using map function-----');
// using map function
const result = num.map( (n) => { return n*2 });
console.log(result);

const prices = [ 1329, 38267, 4002, 402, 5793, 352];
console.log(1329 * 0.05 + 1329);

//  use map function to add 5% GST to all prices

const numprices = prices.map( (p) => ( p * 0.05 + p));
console.log(numprices);

const prices2 = ['$2423.23', '$583.39', ];

console.log( parseInt( '$2423.23'.slice(1)));

console.log(numprices);

//  using filter function

const filteredPrices = prices.filter( (p) => { return p>=500 && p<=5000});

console.log(filteredPrices);

const laptops = [ 'Dell Vostro', 'Acer Predator', 'Asus Vivobook', 'HP Pavillon', 'Lenovo Thinkpad', 'Apple Mackbool', ]

console.log('Dell Vostro'.includes('dell'));

const keyword = 'asus';

const searchData = laptops.filter( (title) => { return title.toLowerCase().includes(keyword.toLowerCase())});
console.log(searchData);