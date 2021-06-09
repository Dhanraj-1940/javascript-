const square = number => number * number;     // if we have only one line of code

const square1 = number => {
    number = number * number;
    return number;
}

const square2 = (number, one_more_arg) => {
    //code
}


console.log(square1(2));
console.log(square(4));