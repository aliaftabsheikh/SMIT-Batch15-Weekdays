// abstract class BasePerson {

//     abstract name: string;
//     abstract age: number;

//     abstract greeting(): string;
//     abstract farewell(): string;
// }

// const b1 = new BasePerson(); // Error: Cannot create an instance of an abstract class.

interface IPerson {
    name: string;
    age: number;
    role: string;
    greeting(): string;
    farewell(): string;
}


class Person implements IPerson  {
    //public / private / protected

    static insitute = "SMIT";

    name: string = "Ali";
    age: number;
    role: string = "User";


    constructor(name: string, age: number, role: string, experience: number) {
        // super();
        this.name = name,
        this.age = age;
        this.role = role;
        // this.experience = experience;
    }

    greeting(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    farewell(): string {
        return `Goodbye from ${this.name}`;
    }

}

class Employee extends Person {
    employeeId: number;
    private salary: number = 50000;

  constructor(name: string, age: number, role: string, employeeId: number) {
    super(name, age, role);

    this.employeeId = employeeId;
  }


  greeting(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and my employee ID is ${this.employeeId}.`;
  }

  farewell(): string {
    return `Goodbye from employee ${this.name}`;
  }

  get getSalary(): number {
    return this.salary;
  }

  set setSalary(newSalary: number) {
   if(newSalary > 0) {
    this.salary = newSalary;
   }else{
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

console.log(Person.insitute)

