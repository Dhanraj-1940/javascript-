class Animals {
    constructor(noLegs){
        this.noLegs = noLegs;
    }

    eat(){
        console.log(this.noLegs," is eating");
    }
}

class Dog extends Animals {
    constructor(noLegs,name,age){
        super(noLegs);
        this.name = name;
        this.age = age;
    }

    bark(){
        console.log(this.name," is barking");
    }
}

const a = new Dog(4,"tommy",5);

console.log(a);
