interface Car {
	name: String;
	make: String;
	year: number;
}

function saveVehicle(car: Car) {
	console.log("Saving", car);
}

const yaKenya = {
	name: "Landcruiser",
	make: "Valaar",
	year: 2019,
};

