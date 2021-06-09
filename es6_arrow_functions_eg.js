
person = {
    talk(){
        console.log("outsideTimeout ",this);
        setTimeout(function(){
            console.log(this);
        }, 1000);
    }
}

person.talk();

//arrow functions do not rebind the "this" keyword
