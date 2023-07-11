const num = [2, 4, 62, 6, 2, 8];

// WAP to print square of all numbers in array

for(let i=0; i<num.length; i++){
    
   
    console.log(num[i] ** 2);
}

const newNums = [];

console.log('------------');
for(let n of num){
    // console.log(n**2);
    console.log(newNums);
    newNums.push(n**2);
}
console.log(newNums);