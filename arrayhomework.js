//  Q-1 Creat an array of number and filter number which are not perfect square

const num = [];
 
let n = 100;
for(let i=1; i<=100; i++){
    num.push(i);
}
const result = num.filter( (num) => {return(num**0.5===parseInt(num**0.5))});
console.log(result);
console.log('-------------');

//  Q-2 Creat an array of namesand filter name with length greater than 5

const names = [ 'Akash', 'Nishant', 'Saurabh', 'Gaurav', 'Rajan', 'Anshika', 'Akansha', 'Sonal'];

const newNames = names.filter( (p) => {return p.length>5});
console.log(newNames);
console.log('-----------------');

// Q-3 Creat an array of full names and use map to keep only first name. (use split function)
 
const name = [ 'Akash Kumar', 'Aman Kumar Chaudhary', 'Nishant Vishwakarma', 'Akansha Tiwari', 'Rishi Pratap'];

let newnames = name.map( (n) => {return n.split(" ")[0]});
console.log(newnames);
console.log('----------------');

//  Q-4 Creat a function to print all prime numbers in given range parameters.


