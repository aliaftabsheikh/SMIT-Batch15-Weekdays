class Person {   
    name;
    fatherName;
    age;
    cnic;

  constructor(name, fatherName, age, cnic){
    this.name = name;
    this.fatherName = fatherName;
    this.age = age;
    this.cnic = cnic;
  }
}

let p1 = new Person('Ali', 'Aftab', 23, 421014567890)
let p2 = new Person('Bilal', 'Junaid', 19, 421013456789)
// let p3 = new Person()
// console.log(p1);
// console.log(p2);
// console.log(p3);


// Inheritance 

class Teacher extends Person {
    course;
    constructor(name, fatherName, age, cnic, course){
        super(name, fatherName, age, cnic)

        this.course = course

        
    }
}

let t1 = new Teacher('Ali', 'Aftab', 23, 421014567890, "WEB & APP")
console.log(t1);
