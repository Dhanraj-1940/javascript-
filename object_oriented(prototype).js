console.log("object prototype javascript");

// person object literal
person = {
    name: "john doe",
    age: 21,
}
console.log(person);

// Person class constructor
function Person(name,age){
    this.name = name;
    this.age = age;
    this.talk = function(){
        console.log(`${this.name} is talking`);
    }
}

// Teacher Class constructor
function Teacher(department, name, age){
    Person.call(this, name, age);          //similar to super(), here teacher class inherits from person class
    this.department = department;
    this.teach = () => {
        console.log(`${this.name} teacher from ${this.department} department is teaching`);
    }
}

// adding more functions to person prototype
Person.prototype.setName = function(newName){
    this.name = newName;
};
// adding more functions to person prototype
Person.prototype.getName = function(){
    return this.name;
};


// creating instance of teacher and person
let teacher1 = new Teacher("Computer Science", "sumit", 45);
let person1 = new Person("dhanraj",23);

//Person.prototype = Object.create(Teacher.prototype);
//Person.prototype.constructor = Teacher;

console.log(Person)

console.log(person1);
console.log(person1.talk());

console.log(teacher1);
console.log(teacher1.teach());
console.log(teacher1.talk());