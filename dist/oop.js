"use strict";
class Car {
    startEngine() {
        return true;
    }
    stopEngine() {
        return true;
    }
    brake() {
        return true;
    }
    accelerate(speed) {
        console.log("Driving faster");
    }
    honk(howLong) {
        console.log("Beep beep yeah!");
    }
}
const car = new Car();
car.startEngine();
//////////////Function overloading
// interface Product {
// 	id: number;
// 	description: String;
// }
// class ProductService {
// 	getProducts(description: String): Product[];
// 	getProducts(id: number): Product;
// 	getProducts(product: number | string): Product[] | Product {
// 		if (typeof product === "number") {
// 			console.log(`Getting the product info for id ${product}`);
// 			return { id: product, description: "great product" };
// 		}
//         else if(typeof product === "string") {
//             console.log(`Getting product with description ${product}`);
//             return [{ id: 123, description: 'blue jeans' },
//             { id: 789, description: 'blue jeans' }];
// 	    } 
//         else {
//             return {id: -1, description: "Error: getProducts() accept only number or string as args"};
//         }
// }
////////////////////// Abstract classes
// abstract class Person {
// 	constructor(public name: String) {}
//     changeAddress(newAddress: String) {
//         console.log(`Changing address to ${newAddress}`);
//     }
//     private giveDayOff(){
//         console.log(`Giving day off to ${this.name}`);
//     }
//     promote(percent: number){
//         this.giveDayOff();
//         this.increasePay(percent);
//     }
//     abstract increasePay(percentage: number):void;
// }
// class Employee extends Person {
//     increasePay(percent: number){
//         console.log(`Increasing the salary of ${this.name} by ${percent}%`);
//     }
// }
// class Contractor extends Person {
//     increasePay(percentage: number) {
//         console.log(`Increasing the hourly rate of ${this.name} by ${percentage}%`);
//     }
// }
// const workers: Person[] = [];
// workers[0] = new Employee("Johanna");
// workers[1] = new Contractor("Amos");
// workers.forEach(worker => worker.promote(5))
////////////////////////////////////////////////// Same class in child and parent :)
// class Person {
// 	constructor(
// 		public firstName: String,
// 		public lastName: String,
// 		private age: number
// 	) {}
//     sellStock(symbol: String, numberOfShares: number) {
//         console.log(`Selling ${numberOfShares} of ${symbol}`)
//     }
// }
// class Employee extends Person {
//     constructor(firstName: string, lastName: string,
//         age: number, public department: string) {
//             super(firstName, lastName, age)
//         }
//     sellStock(symbol: String, sharesNumber: number) {
//         super.sellStock(symbol, sharesNumber);
//         this.reportToCompliance(symbol, sharesNumber);
//     }
//     private reportToCompliance(symbol: String, shares: number) {
//         console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`)
//     }
// }
// const empl = new Employee("Joe", "Williams", 48, "Accounting");
// empl.sellStock("TSLA", 12490);
///--------------------///
// class AppState {
//     counter = 0;
//     private static instanceRef: AppState;
//     private constructor () {}
//     static getInstance(): AppState {
//         if(AppState.instanceRef === undefined) {
//             AppState.instanceRef = new AppState()
//         }
//         return AppState.instanceRef;
//     }
// }
// const appstate1 = AppState.getInstance();
// appstate1.counter++;
// appstate1.counter++;
// const appstate2 = AppState.getInstance();
// appstate2.counter++;
// appstate2.counter++;
// console.log(appstate2.counter);
// console.log(appstate1.counter);
