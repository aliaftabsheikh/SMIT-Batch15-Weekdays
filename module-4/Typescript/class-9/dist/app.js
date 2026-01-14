"use strict";
// // Function Overloads
Object.defineProperty(exports, "__esModule", { value: true });
// function add(num1: number, num2: number): number;
// function add(num1: string, num2: string): string;
// function add(num1: any, num2: any): any {
//     return num1 + num2;
// }
// console.log(add(5, 10));          // Output: 15
// //! TUPLES 
// let person1: [string, number] = ['Alice', 30];
//! Object Oriented Programming in TypeScript
// class Point {
//     readonly x: number;
//     readonly y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }
// class Point1 {
//     readonly x: number;
//     readonly y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }
// const point: Point = new Point(10, 20); 
// const point1: Point1 = new Point1(40, 10); 
// var point3 = point instanceof Point;
// console.log(point3);
// // point1.x = 15;
// point1.y = 25;
// console.log(point1);
// console.log(point2);
// class Human {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }
// class Animal {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(this.name + " is a Human and is eating");
//     }
// }
// let h1 = new Human("");
// let a1 = new Animal("world", 50);
//this is working, but it should not because it is 
//a fresh object with extra properties
// h1 = new Animal("test", 25);
// console.log(h1);
// a1 = new Human("zeeshan");//ERROR
// //my common sense is saying this is correct, but?
// let a = {name: "Zia"};
// a = {name: "Zeeshan", age: 22};//ERROR
class Animal {
    name;
    constructor(theName) {
        this.name = theName;
    }
    move(meters = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
    bite() {
        console.log("bites");
    }
}
const s1 = new Snake("Python");
s1.move(15);
s1.bite();
