// const name: string = "Hello World !"

// console.log(name)



// let a: number = 10;


// console.log(a);



// class Person {
//     name: string;
//     age: number;
//     city: string;
//     cnic: string;
//     role: string;

 

//     constructor(name: string, age: number, city: string, cnic: string, role: string = "User") {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.cnic = cnic;
//         this.role = role;
//     }
// }

// const person = new Person("John", 30, "New York", "12345-6789012-3", "Admin");
// const person1 = new Person("Jane", 25, "Los Angeles", "98765-4321098-7");

// console.log(person);
// console.log(person1);


//! Using Type Alias for any type definition

// type IPerson = {
//     name: string;
//     age: number | string;
//     city: string;
//     cnic: string;
//     role?: string;
// }

//! Interface only for object shape definition'

interface IName {
    firstName: string;
    lastName: string;
    middleName?: string;
}

interface IPerson {
    name:  IName;
    age: number | string;
    city: string;
    cnic: string;
    role?: string;
}

interface IEmployee {
   name : IName;
    
}

const person : IEmployee= {
    name: {
        firstName: "John",
        lastName: "Doe",
    },
    age: "30",
    city: "New York",
    cnic: "12345-6789012-3",
}

const person1: IPerson = {
    name: {
        firstName: "Jane",
        lastName: "Smith",
        middleName: "A.",
    },
    age: 25,
    city: "Los Angeles",
    cnic: "98765-4321098-7",
}

console.log(person);
console.log(person1);
