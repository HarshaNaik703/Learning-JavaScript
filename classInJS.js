// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function. 
// ex : static keyword, encapsluatoin, inheritance

// STATIC : Belongs to the class itself and not to the class instace

// inheritance

class Products {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

class MathUtility{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius) {
        return (radius * 2*this.PI).toFixed(2);
    }
}

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Harsha");
console.log(user1.username);
console.log(User.userCount);

const user2 = new User("Harsha");
console.log(user2.username);
console.log(User.userCount);

