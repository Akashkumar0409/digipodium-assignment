// const myarr = [ 253, 'nice', 53.756, True, console.log, [ 23, 44] ];
// {
// console.log(myarr.length);
// console.log(typeof myarr);}

const movies = [ 'Avengers', 'Flash', 'Pushpa', 'War', 'Jawaan', 'FastX', 'Omg'];

// indexing
console.log('------indexing-------');
console.log(movies[2]);
console.log(movies[100]);
console.log(movies.flat(-2));
console.log(movies.indexOf('Flexs'));

// Slicing
console.log('------slicing-------');
console.log(movies.slice(2,6));
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice());

// write syntax to exclude element on index 4 using slice function

// adding new elements
movies.push('shershaah');  //adds elements at the end of array
movies.push('shershaah');  //adds elements at the start of array
movies.unshift('avtar');

console.log(movies);

// removing elements
movies.pop(); // removes elements from the end of the array
movies.pop(); // removes elements from the start of the array
movies.shift();  

console.log(movies);

movies.splice(3, 2);

console.log(movies);

// spread operator
console.log( [...movies, 'Batman ', 'Batman 2', 'Batman 3'] );
console.log( [ ...movies.slice(0, 4) ]);
