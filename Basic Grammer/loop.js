var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {	
	text += cars[i];
}
console.log(text);

// ES6 grammer
// cars.map((car)=>{
//     console.log(car);
// })
