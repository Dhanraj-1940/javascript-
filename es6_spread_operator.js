const first = [1,2,3,4,5];
const second = [6,7,8,9];

// old way of concating strings
/*const combined = first.concat(second);
console.log(combined);*/

// using spread operator
const combined = [...first,...second];
console.log("using spread operator: ",combined);


//combining classes using spread operator
const name = {name: 'Joe'};
const address = {adress: 'Goa'}
const person = {...name ,...address, age:23};
console.log(person);

//cloning class and array using spread operator
const combined_clone = [...combined];
const person_clone = {...person};
console.log("clone(combined): ",combined_clone);
console.log("clone(person): ",person_clone);

