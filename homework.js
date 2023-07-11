// WAP to print all perfect squre in range of 50-350

for(i=50; i<=350; i++){
   if((i**0.5 === parseInt(i**0.5))){
    console.log(i);
   }
    
}
console.log('--------------');

// WAP to convert celsius to fahrenheit and vise versa.

// let c = 45;

// let f = 101;

// console.log(c+'Celsius='+ (c*(9/5)+32)+'Fahrenheit');

// console.log(f+'Fahrenheit='+ ((f-32)*5/9)+'Celsius');

// console.log('---------------');

const temp = 30;

far_temp = (temp * 9/5) + 32;

console.log('Temperature for'+temp+'degree c in Fahrenheit is'+far_temp+'degree F');

console.log(`Temperature for ${temp}degree c in Fahrenheit is ${far_temp}degree F`);

// WAP to check if number is palindrome


num = 454;
rev = 0;
m = num;
while(m>0){
    temp = m%10;
    rev = rev*10+temp;
    m = Math.floor(m/10);
}
if(rev == num){
    console.log(num+'is palindroem number');
}else{
    console.log(num+'is not a palindrome');
}
console.log('--------------');

//  WAP to print sum of all digits of a number 

num = 45678;
sum = 0;
m = num;
while(num>0){
    temp = num%10;
    sum = sum+temp;
    num = Math.floor(num/10);
}
console.log('the sum of all digits'+m+'='+sum);
console.log('-------------');