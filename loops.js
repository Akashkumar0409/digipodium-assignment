for(let i=0; i<10; i++){
    console.log(i);
};

for(let i=10; i>0; i-=2){
    console.log(i);
};

// WAR to check if number is prime or not

 let m = 35;

 let prime = true;

for(let i=2; i<m; i++){
    console.log('not prime');
    prime = false;
    break;
}

if(prime) console.log('prime');

// WAP to check if a number is divisible by both 7 and 11
// in range of 100-500.

for(let i =100; i<=500; i++){

    if(i%7==0 && i%11==0){
        console.log(i);
    }
}

// WAP to check if a number is perfect squre or not 

let n = 25;

let sqrt = n**0.5;

console.log(25**0.5 === parseInt(25**0.5));

if(sqrt === parseInt(sqrt)){
    console.log('perfect squre');
}
else{
    console.log('not perfect squre');
}

p = 10;
while (p>0){
    console.log(p);
    p--;
};


q = 10;
do{
    console.log(q);
    q--;
}while (q>0);

let num1 = 376;
let reverse = 0;

while (num1 > 0){
    let d = num1%10;
    reverse = reverse*10 + d;
    num1 = parseInt(num1/10);
}

console.log(reverse);