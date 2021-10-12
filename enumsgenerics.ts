
const outerFunc = (someValue: number) =>(multiplier: number) => someValue * multiplier;

const innerFunc = outerFunc(10);

let result = innerFunc(6);


type numFunction<T> = (arg: T) => (c: number) => number;

const noArgsFunct: numFunction<void> = () => (c: number) => c + 5;

const numArgFunct: numFunction<number> = (value: number) => (multiplier: number) => value * multiplier;

/**
 * Mapping String Enums
 * 
 * 
interface User {
	name: string;
	role: UserRole;
}

enum UserRole {
	Admin = "admin",
	Manager = "manager",
}

function loadUser<T>(): T {
	return JSON.parse('{"name" : "John", "role" : "admin"}');
}

const user = loadUser<User>();

switch (user.role) {
	case UserRole.Admin:
		console.log("Show control panel");
		break;
	case UserRole.Manager:
		console.log("Hide control panel");
		break;
}

*/

/**
 * PAIRS
 * 
 * 
class Pair<K, V> {
	constructor(public key: K, public value: V){}
}

function compare<K,V>(pair1: Pair<K,V>, pair2:Pair<K,V>): boolean {
	return pair1.key === pair2.key && pair1.value === pair2.value;
}

let p1: Pair<number, string> = new Pair(24, "Mangoes");
let p2 = new Pair<number, string>(24, "Oranges");

console.log(compare<number, string>(p1,p2));

*/

/**
 * "generic functions"
 * 
 * 
 * function printMe<T>(content: T): T
 {
	 console.log(content);
	 return content;
 }

 const printMeArrow = <T>(content: T): T => {
	 console.log(content)
	 return content;
 }


 const a = printMe("Hello");

 class Person {
	 constructor(name: string) {}
 }

 const b = printMe(new Person("Diana"));

*/

/** 
const someValue: Array<number> = [];
console.log(someValue.length);

class Person {
	constructor(name: String) {}
}

class Student extends Person {
	constructor(public name: string, public department: Department) {
		super(name);
	}
}

class Animal {
	constructor(name: string) {}
}

const somePeople = new Array<Person>(80);

enum Department {
	ENG = "SCHOOL OF ENGINEERING",
	SCIT = "SCHOOL OF COMPUTING AND INFORMATION TECHNOLOGY",
	EDUCATION = "SCHOOL OF EDUCATION",
}

interface Comparator<T> {
	compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
	constructor(private width: number, private length: number) {}

	compareTo(value: Rectangle): number {
		return this.width * this.length - value.width * value.length;
	}
}

class Triangle implements Comparator<Triangle> {
	compareTo(value: Triangle): number {
		throw new Error("Method not implemented.");
	}
}

const rectangle1 = new Rectangle(76, 54);
const rectangle2 = new Rectangle(12, 45);                */

// rectangle1.compareTo(rectangle2) > 0
// 	? console.log("Rectangle 1 is bigger")
// 	: rectangle1.compareTo(rectangle2) == 0
// 	? console.log("Rectangles are equal")
// 	: console.log("Rectangle 2 is smaller");

// enum Direction {
//     Up = "UP",
// 	Down = "DOWN",
// 	Left = "LEFT",
// 	Right = "RIGHT"
// }

// const nextMove = Direction.Right;
