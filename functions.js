function addNums(a, b){
   var c = a+b;
    console.log(c);
};

addNums(2673, 293856);
addNums(9328, 384);
addNums(2375, 293856);
addNums(2673, 296);

const getPercentage = function(m1, m2, m3, m4, m5){

   t = m1+m2+m3+m4+m5;

   p =(t/5);
   console.log(p, '%');

}

getPercentage(67, 77, 55, 88, 90 );


const getFact = (num) => {
    let f = 1;
    for(let i =1; i<=num ; i++){
        f *= i;

    };
    console.log(f);
    return f;
}

getFact(5);

const result = getFact(5);
console.log(result);