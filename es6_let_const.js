// let has only block scope
//var defined inside a function can be used anywhere within that function


function loop1(){
    console.log("first for loop")
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(" var outside loop ",i);
}

function loop2(){
    console.log("second for loop")
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log(" let outside loop ",i);
}

loop1();

loop2();



