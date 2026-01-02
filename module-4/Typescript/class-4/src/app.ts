// const message = "Hello World !"

// import type { IEmployee, IPerson } from "../types/index.js";

// console.log(message);

interface IPerson {
    name: string;
    age: number;
    cnic: string;
    gender: string;
    isAdmin: boolean;
    personId?: string
}

// interface IEmployee extends IPerson {
//     employeeId: string;
// }


interface IEmployee {
    employeeId: string;
}


type intersectedType = IPerson & IEmployee;


const person: IPerson = {
    name: "John Doe",
    age: 30,
    cnic: "12345-6789012-3",
    gender: "male",
    isAdmin: false,
    personId: "PERS001"
}

// const employee: IEmployee = {
//     name: "Jane Doe",
//     age: 30,
//     cnic: "12345-6789012-3",
//     gender: "male",
//     isAdmin: false,
//     employeeId: "EMP001"
// }


// const employee: intersectedType = {
//     name: "Jane Doe",
//     age: 30,
//     cnic: "12345-6789012-3",
//     gender: "male",
//     isAdmin: false,
//     employeeId: "EMP001"
// }

// let data: unknown;

// data = "Hello";
// data = 20.0000;

// if (typeof data === "string") {
//     const strData = data.toUpperCase();
//     console.log(strData);
// }
// if (typeof data === "number") {
//     const numData = data.toFixed(2);
//     console.log(numData);
// }

function greeting (name: string): never {
    throw new Error("Function not implemented.");
}