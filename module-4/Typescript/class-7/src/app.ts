// const message: string = "Hello, TypeScript!";

// console.log(message);

// !First Example
// const names: (string | number | boolean)[] = [12, 34, 56, 78, 90, "ali", "umar", true, false, "ahmed"];
// console.log(names);

// !Second Example

// type nameTypes = string | number | boolean;

// const names: nameTypes[] = [12, 34, 56, 78, 90, "ali", "umar", true, false, "ahmed"];
// console.log(names);

// !Third Example

// const names: Array<string | number | boolean> = [12, 34, 56, 78, 90, "ali", "umar", true, false, "ahmed"];
// console.log(names);

// !Fourth Example

// const names: Array<nameTypes> = [12, 34, 56, 78, 90, "ali", "umar", true, false, "ahmed"];
// console.log(names);

//! FUNCTIONS

// function addNum (num1: number, num2: number): number {
//     const sum = num1 + num2;
//     console.log("Inner type--->",typeof sum);

//     return sum;
// }

// const result = addNum(10, 20);
// console.log("Outer type--->",typeof result);

// console.log(result);

//! Anonymous Function

/**
 * Executes an anonymous function that logs a greeting message.
 *
 * @param x - A numeric value (currently unused in the function body)
 * @param y - A numeric value (currently unused in the function body)
 * @returns void - This function does not return any value. The `void` return type indicates that
 * the function performs an action (logging to console) but produces no meaningful output.
 * Any return statement in this function would be ignored, or the function would exit without
 * returning a value.
 *
 * @example
 * ```typescript
 * myFunction(5, 10); // Output: "Hello from anonymous function"
 * ```
 */
// const myFunction = function(x: number, y: number): any {
//     console.log("Hello from anonymous function");
//     // return x + y;
// }

// console.log(myFunction(5, 10));

// let myAdd2: (x: number, y: number) => number;

// myAdd2 = function(x: number, y: number): number {
//     return x + y;
// }


// console.log(myAdd2);


// myAdd2(20, 10)


// let myAdd4: (a: number, b: number) => number = (a : number, b : number) => a + b;


// console.log(myAdd4(30, 40));


// type GreetFunction = (a: string) => void;

// function greeter(fn: GreetFunction) {
//     fn("Hello, World!");
// }

// greeter(function(message: string) {
//     console.log(message);
// });



// let buildName: (firstName: string, lastName?: string) => string = function(firstName: string, lastName?: string) : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }


// let result1 = buildName("Bob", "Adams");   

// console.log(result1);


// let buildName: (firstName: string, lastName?: string) => string = function(firstName: string, lastName = "Khan") : string {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }


// let result1 = buildName("Bob", "Bhai");   

// console.log(result1);


// function buildName(...allNames: string[]) {
//     allNames.map((name) => console.log("Welcome : ", name));
//     return allNames.join(" ");
   
// }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);


    function myCallBack(text: string) {
        console.log("inside myCallback " + text);
    }

    function callingFunction(initialText: string, callback: (text: string) => void)
    {
        callback(initialText);
    }

    callingFunction("myText", myCallBack);