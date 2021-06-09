
const person = {
	name : "Dhanraj",
	walk() {
		console.log(this);
	},
	talk() {},
};

const human = {
	name : "john doe",
	walk() {
		console.log(this);
	},
	talk() {},
};


person.walk();

const walk = person.walk.bind(human);     //any arguement passed inside bind function will change the 'this' to that object reference

walk();





	