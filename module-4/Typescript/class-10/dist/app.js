"use strict";
// abstract class BasePerson {
Object.defineProperty(exports, "__esModule", { value: true });
//     abstract name: string;
//     abstract age: number;
//     abstract greeting(): string;
//     abstract farewell(): string;
// }
// const b1 = new BasePerson(); // Error: Cannot create an instance of an abstract class.
class Person {
    //public / private / protected
    static insitute = "SMIT";
    name = "Ali";
    age;
    role = "User";
    constructor(name, age, role) {
        // super();
        this.name = name,
            this.age = age;
        this.role = role;
    }
    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    farewell() {
        return `Goodbye from ${this.name}`;
    }
}
class Employee extends Person {
    employeeId;
    salary = 50000;
    constructor(name, age, role, employeeId) {
        super(name, age, role);
        this.employeeId = employeeId;
    }
    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and my employee ID is ${this.employeeId}.`;
    }
    farewell() {
        return `Goodbye from employee ${this.name}`;
    }
    get getSalary() {
        return this.salary;
    }
    set setSalary(newSalary) {
        if (newSalary > 0) {
            this.salary = newSalary;
        }
        else {
            console.log("Salary cannot be negative.");
        }
    }
}
// const p1 = new Person("Ali", 30, "Teacher");
// const e1 = new Employee("Ahmed", 25, "Developer", 121);
// console.log(p1.name = "Usman");
// console.log(p1)
// 
// console.log(e1.setSalary = 60000)
console.log(Person.insitute);
