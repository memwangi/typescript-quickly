class Dog {
	readonly animalType = "DOG";
	constructor(public name: String) {}

	sayHello(): String {
		return `Hello ${this.name}`;
	}
}

class Fish {
	readonly animalType = "FISH";
	constructor(public name: String) {}

	dive(howDeep: number): String {
		const depth = 0;
		return `${depth + 1}`;
	}
}

type Pet = Fish | Dog;

// Type guards
function talkToPet(pet: Pet): String | undefined {
	if (pet instanceof Fish) {
        return "Fish cannot talk, sorry!"
	}
    else {
        return pet.sayHello();
    }
}

// export class SearchAction {
//     actionType = "SEARCH";

//     constructor (readonly Payload: {searchQuery: String}) {

//     }
// }

// export class SearchSuccessAction {
//     actionType = "SEARCH_SUCCESS"
//     constructor (public Payload: {searchResults: string[]}){

//     }
// }

// export class SearchFailedAction {
//     actionType = "SEARCH_FAILED"

// }

// export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;

// interface Rectangle {
//     kind: "rectangle";
//     width: number;
//     height: number;
// }

// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// type Shape = Circle | Rectangle;

// function area (shape: Shape) {
//     switch(shape.kind) {
//         case "rectangle": return shape.height * shape.width;
//         case "circle": return Math.PI * Math.pow(shape.radius, 2);

//     }

// }

// const circle: Shape = {
//     kind: "circle",
//     radius: 589394
// }

// console.log(area(circle));

// type Person = {
//     "address": String
// }

// let person2: unknown;

// person2 = JSON.parse('{"address": 4453, "username": "Joseph"}');
// const isPerson = (object: any): object is Person => "address" in object;

// if(isPerson(person2)) {
//     console.log(person2.address)
// }
// else {
//     console.log (`${person2} is not a person`);
// }
