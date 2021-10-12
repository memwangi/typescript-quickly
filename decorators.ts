//Mixins

type constructorMixin = { new (...args: any[]): {} };

@UseSalutation("Dr.")
class Greeter {
	constructor(public name: string) {}

	sayHello() {
		console.log(`Hello ${this.name}`);
	}
}

function UseSalutation(salutation: String) {
	return function <T extends constructorMixin>(target: T) {
		return class extends target {
			name!: string;

			private message: string = "Hello " + salutation + this.name;

			sayHello() {
				console.log(`${this.message}`);
			}
		};
	};
}

const grt = new Greeter("Bob Marley");

grt.sayHello();

/**
 * 
 * Decorator Factories
 * 
 * 
function UIComponent(html: string) {
	console.log(`The decorator received ${html}`)
	 
	return function(target: Function) {
		console.log(`Someone wants to create a UI component from \n ${target}`)
	}
}

@UIComponent('<h1> Hello Shopper! </h1>')
class Shopper {

	constructor(points: number){};
}
*/

/**
 * Introduction

function whoAmI(target: Function) {
	console.log(`You are: \n ${target}`);
}

@whoAmI
class Friend {
	constructor(private name: string, private age: number) {}

}
*/
