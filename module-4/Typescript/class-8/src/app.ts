// const message : string = "Hello, TypeScript!";

// console.log(message);

// function callingFunction(text: string, callback: (text: string) => void){
//     callback(text);
// }

// callingFunction("Hello from Typescript!", (text)=>{
//     console.log(text);
// } )

// function delay(milliseconds: number): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, milliseconds);
//   });
// }

// //Using `then`, `catch`, and `finally`:
// delay(1000)
//   .then(() => {
//     console.log("The delay is over");
//   })
//   .catch((error) => {
//     console.error("Something went wrong:", error);
//   })
//   .finally(() => {
//     console.log("This is always executed");
//   });

// //Using `async/await`:
// async function executeDelay() {
//   try {
//     await delay(1000);
//     console.log("Await: The delay is over");
//   } catch (error) {
//     console.error("Await: Something went wrong:", error);
//   } finally {
//     console.log("Await: This is always executed");
//   }
// }

// executeDelay()

//Now Do Coding from the following Article
//https://blog.logrocket.com/async-await-in-typescript/

//Review the tutorial and convert the code in TypeScript
//https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript


// Function overloads 

// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: boolean, y: boolean): boolean;

// function add(x: any, y: any): any {
//     return x + y;
// }


// console.log(add("Hello, ", "TypeScript!"));


// Tuples 


// const user : [string , number , boolean] = ["Alice", 30, true];

// console.log(user[0]);


// const failingResponse: [string, number] = ["Not Found", 404, 123];

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Manager"],
];

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
  [staff[0]!, 250],
  [staff[1]!, 250, 260],
  [staff[1]!, 300, 300, 300],
];



console.log("10" - 10);
