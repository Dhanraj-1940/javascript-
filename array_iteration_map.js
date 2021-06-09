// creates new array by performing a function on each array element
// the function takes 3 arguements: value,index and the array itself
const numbers = [1,2,3,4,5,6,7,8,9,10];

const new_numbers = numbers.map((value) => value*2);
console.log(new_numbers);