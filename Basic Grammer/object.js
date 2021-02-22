var car = {
    name: "Sonata",
    ph: "500ph",
    start : function() {
        console.log("engine is starting");
    },
    stop : function () {
        console.log("engin is stopped");
    }
}

// variable
console.log(car.name);
console.log(car.ph);
console.log(car.size); // undefined

// function
car.start();
car.stop();

// console.log(car.start());
// console.log(car.stop());

var car2 = {
    name: "BMW",
    ph: "500ph",
    start : function() {
        console.log("engine is starting");
    },
    stop : function () {
        console.log("engin is stopped");
    }
}

var car3 = {
    name: "Ford",
    ph: "500ph",
    start : function() {
        console.log("engine is starting");
    },
    stop : function () {
        console.log("engin is stopped");
    }
}

console.log(car2.name);
console.log(car3.name);

// array
var cars = [ car, car2, car3 ];
console.log(cars);

//#Work2 자동차 배열에서 bmw 라는 이름을 가진 차량을 찾으면 "!" 출력하세요 for / if
for(var i = 0; i < cars.length; i++) {
    if(cars[i].name == "bmw") {
        console.log("!");
        return;
    }
}