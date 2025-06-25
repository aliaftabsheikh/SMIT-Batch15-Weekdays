// OOP (Object-Oriented Programming) 

// Spaghetti code 

// class ----> blueprint for creating objects

// blueprint is like a map 



class Car {

    make;   // Properties
    model;
    year;
   

// Constructor function call before the object is created

    constructor(make = 'Unknown' , model = 'Unknown', year = 0) { // Default values
   

        this.make = make;
        this.model = model;
        this.year = year;
    }

    specification() {          // Method
        console.log(` CAR SPECIFICATION ---> ${this.year} ${this.make} ${this.model}`);
    }
}

const c1 = new Car('Honda', 'Civic', 2021);
// const c2 = new Car();
// console.log(c1); 
// console.log(c2); 

// c1.specification(); // Calling the method


// Inheritance 


class ElectricCar extends Car {
    batteryCapacity; // New property for ElectricCar
    range;


   constructor(make, model , year, batteryCapacity, range) {
    super(make, model, year); // Call the parent constructor

    this.batteryCapacity = batteryCapacity;
    this.range = range;
   } 


   specification(){
    console.log(`ELECTRIC CAR SPECIFICATION ---> ${this.year} ${this.make} ${this.model} - Battery: ${this.batteryCapacity}, Range: ${this.range}`);
   }
}

const e1 = new ElectricCar('Honda', 'Civic', 2021, '100kWh', '300 miles');
// console.log(e1)



// e1.specification()







// new ---> 4

// - Create a empty object
// - Call the constructor function
// - Enable this keyword and assign to the empty object
// - Return this 




// function greeting(name = 'John') {
//     console.log('Hello ', name);
// }

// greeting('Ali'); 
// greeting('Kashan'); 




// Polymorphism always used with inheritance

// Polymorphism allow override parent class method



class HybridCar extends ElectricCar{
    hybrideType;

    constructor(make, model, year, batteryCapacity, range, hybrideType) {
        super(make, model, year, batteryCapacity, range); 
        this.hybrideType = hybrideType;
    }

    specification(){
        console.log(` HYBRIDCAR SPECIFICATION ---> ${this.year} ${this.make} ${this.model} - Battery: ${this.batteryCapacity}, Range: ${this.range}, Type: ${this.hybrideType}`);
    }

}

const h1 = new HybridCar('Toyota', 'Prius', 2022, '50kWh', '400 miles', 'Petrol');
// console.log(h1);

// h1.specification()


// Encapsulation


class BankAccount {
    accountHolder;
    #accountNumber;
    #balance


    constructor(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.#accountNumber = accountNumber; // Private property
        this.#balance = balance; // Private property
    }

    get getBalance() {
        return this.#balance; // Getter for balance
    }


    set setBalance(balance){

        this.#balance = balance; // Setter for balance
    }

}


const b1 = new BankAccount('Ali', '123456789', 1000);

b1.setBalance = 10000
console.log(b1.getBalance); // Accessing the balance using getter

console.log(b1);
