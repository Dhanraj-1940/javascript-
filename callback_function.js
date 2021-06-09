
person = [
    {name:'Suresh', address:'Goa'},
    {name:'Ajay', address:'Delhi'},
    {name:'Vivek', address:'Mumbai'},
];


function enrollPerson(p,callback,callback2){  // inner function executes ONLY AFTER the outer function is executed
    callback();
    setTimeout(function(){
        person.push(p);
        console.log(p.name," enrolled");
        console.log(""); 
        //callback();
        callback2();
    },3000)
}

function getPerson(){
    setTimeout(() => person.forEach(person => console.log(person.name," fetched")),5000);  //arrow function
}

function getAddress(){
    person.forEach(person => console.log(person.address));
}

p = {name:'JohnDoe', address:'newYork'};
enrollPerson(p,getPerson,getAddress);
console.log("the End");