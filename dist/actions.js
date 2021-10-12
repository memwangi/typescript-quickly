"use strict";
class Dog {
    constructor(name) {
        this.name = name;
        this.animalType = "DOG";
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
class Fish {
    constructor(name) {
        this.name = name;
        this.animalType = "FISH";
    }
    dive(howDeep) {
        const depth = 0;
        return `${depth + 1}`;
    }
}
// Type guards
function talkToPet(pet) {
    if (pet instanceof Fish) {
        return "Fish cannot talk, sorry!";
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
