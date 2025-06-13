// BLUEPRINT -----> OBJECTS

class Person {
    //PROPERTIES 
    name = 'Ali';
    age = 23;
    role = 'Teacher'

// METHODS 
    greeting(){
        console.log(`Hello ${this.name}`);
    }
}

// const p1 = new Person()
// const p2 = new Person()

// p2.greeting()
// console.log(p1);
// console.log(p2);


class StudentAdmissions{
    name;
    fatherName;
    age;
    cnic;
    constructor(name, fatherName, age, cnic){
      this.name = name;
      this.fatherName = fatherName;
      this.age = age;
      this.cnic = cnic
    }
    greeting(){
        console.log("HELLO ! ",this.name);  // OBJECT
    }

    ageChecker(){
        if(this.age > 18){
            console.log(this.name , "You are eligible for admission");
        }else{
            console.log(this.name, "You are not eligible for admission !");
            
        }
    }

}

const s1 = new StudentAdmissions('Ali','Aftab', 23, 42101345790 )

const s2 = new StudentAdmissions('Faizan','Qadeer', 25, 42101345678 )

const s3 = new StudentAdmissions('Subhan','Saleem', 16, 4210134567890 )



// console.log(s1);
// console.log(s2);
// console.log(s3);


// s1.ageChecker()
// s2.ageChecker()
// s3.ageChecker()



// INHERITENCE

class Admin extends StudentAdmissions{
    role;

    constructor(name, fatherName, age, cnic, role){
        super(name, fatherName, age, cnic)
        this.role = role
    }
}

const a1 = new Admin("Ali", "Aftab", 23, 4210145776, "Admin")
console.log(a1);

a1.greeting()
a1.ageChecker()

