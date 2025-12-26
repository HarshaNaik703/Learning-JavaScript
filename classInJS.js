// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function. 
// ex : static keyword, encapsluatoin, inheritance

// STATIC : Belongs to the class itself and not to the class instace

// inheritance = allows new class to inherit properites and methods froma existing class (parent -> child)

// super = keyword is used in classes to call the constructor or access the properties and methods of a parent.
// this = this object
// super = the parent

// getters = special methods that makes a property readable
// setters = special methods that makes a property writable
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    set width(newWidth){

    }
    alive = true;
    move(speed){
        console.log(`The ${this.name} moves at speed of ${speed}kph`)
    }
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} is running`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} is swimming`);
        super.move(this.swimSpeed);
    }

}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);

rabbit.run();
fish.swim();
