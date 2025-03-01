// // complete this js code
// class Person{
// 	constructor(name, age){
// 		this.name=name;
// 		this.age=age;
// 	}

// 	greet(){
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
// 	}
// }

// class Employee extends Person{
// 	constructor(name,age,jobTitle){
// 		this.name=name;
// 		this.age=age;
// 		this.jobTitle=jobTitle;
// 	}

// 	jobGreet(){
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// 	}
// }

function Person(name, age) {
	this.name = name;
	this.age = age;

	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
}

function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;

	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}

	__proto__=Person;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
