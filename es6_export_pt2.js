import { Person } from './es6_export_pt1.js'
class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log("teaching");
    }
}

const teacher1 = new Teacher("Sumit","Btech");
console.log(teacher1);

const person = new Person("Dhanraj")
console.log(person);