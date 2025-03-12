// complete this js code
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
// 		super(name, age);
// 		this.jobTitle=jobTitle;
// 	}

// 	jobGreet(){
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// 	}
// }

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		const message = `Hello, my name is ${this.name}, I am ${this.age} years old.`;
		console.log(message);
		return message;  // ✅ Returning the message helps Cypress validate the output
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age);
		this.jobTitle = jobTitle;
	}

	jobGreet() {
		const message = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
		console.log(message);
		return message;  // ✅ Helps Cypress verify the correct output
	}
}

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.greet = function(){
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
// }

// function Employee(name, age, jobTitle) {
// 	this.name = name;
// 	this.age = age;
// 	this.jobTitle = jobTitle;

// 	__proto__=Person;
// }

// Employee.prototype.jobGreet = function(){
//     console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// }

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
