console.log("Regular Expressions Tutorial")
let reg = /dhanraj/gi;        //this is a regular expression literal   //g and i are flags
console.log(reg);           
console.log(reg.source);    //this returns the value inside the refular expression literal

let s = "my name is Dhanraj and dhanraj and also dhanraj once again";
//function will return an array for match and null for no match
let result = reg.exec(s)
//console.log(result);         
//result = reg.exec(s)
//console.log(result);
//result = reg.exec(s)
//console.log(result);                //we can use multiple exec() with global(g) flag 
if(result!=null){
    console.log(result);
    console.log(result.index);
    console.log(result.input);
}
else{
    console.log("empty array");
}


//test() function returns true or false if reg exp exists
let result2 = reg.test(s);
console.log(result2);


//match() returns array of results or null
let result3 = s.match(reg)
console.log(result3)

//search() returns index pof first match else -1
let result4 = s.search(reg);
console.log(result4)

//replace() returns new string with replacement
let result5 = s.replace(reg,"Raiturkar")
console.log(result5);
