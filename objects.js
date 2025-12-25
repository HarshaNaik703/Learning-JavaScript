// objects = A collection of related properties and/or methods can represent real world objects (people, products, places)
// object = {key: value, function()}

const person = {
    firstName:"Harsha",
    lastName:"Naik",
    age:22,
    isEmployeed : false,
    sayHello : ()=>{console.log(`Hii, this is ${person.firstName}`)}
};

person.sayHello();


function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("Toyata", "Fortunar", 2030, "white");
const car2 = new Car("Toyata", "innova", 2032, "white");
const car3 = new Car("Benz", "s-class", 2026, "black");


console.log(car1.make);
console.log(car1.year);
console.log(car1.model);
console.log(car1.color);


console.log(car2.make);
console.log(car2.year);
console.log(car2.model);
console.log(car2.color);

console.log(car3.make);
console.log(car3.year);
console.log(car3.model);
console.log(car3.color);
