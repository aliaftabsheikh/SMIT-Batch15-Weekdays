// strong typing
// type inference
// Union Types
// type Aliases
// Interfaces
// Type Intersection
// Module Systems
// Nested Objects
// Extend Interfaces
// Optional Properties in objects
// any , unknown , never types


//! ANY

// let userInput: any;

// userInput = true;
// userInput = 5;
// userInput = "Max";


// console.log(userInput.toUpperCase());
//  // No Error at compile time but will give error at runtime if userInput is not string


//! UNKNOWN

let userInput: unknown;

userInput = "Max";
userInput = 5;
// userInput = true;

// console.log((userInput as number).toFixed(2));

// console.log((userInput as string).toUpperCase());




// if (typeof userInput === "string") {
//     console.log(userInput.toUpperCase());    
// }

// if (typeof userInput === "number") {
//     console.log(userInput.toFixed(2));    
// }

// if (typeof userInput === "boolean") {
//     console.log(userInput.valueOf());    
// }


// ! NEVER

// function greeting(message: string): string {
//    return "Hello " + message;
// }


// console.log(greeting("World !"));


//! Enums

// enum Role {
//     ADMIN = 1 ,
//     READ_ONLY,
//     AUTHOR
// }

// console.log(Role.ADMIN);
// console.log(Role.READ_ONLY);
// console.log(Role.AUTHOR);

enum STATUS_CODES {
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500,
    SUCCESS = 200
}



// console.log(ERROR_CODE.NOT_FOUND);
// console.log(ERROR_CODE.UNAUTHORIZED);
// console.log(ERROR_CODE.FORBIDDEN);
// console.log(ERROR_CODE.INTERNAL_SERVER_ERROR);

let token: number = 12345;

if (token !== 12345) {
    console.log("UNAUTHORIZED --->", STATUS_CODES.UNAUTHORIZED);
}else{
    console.log("Access Granted --->", STATUS_CODES.SUCCESS);
}