// Blueprint of a class
class StudentAdmission {
    // this = {}
    name;
    fatherName;
    age;
    cnic;
    course;



    constructor(name, fatherName, age, cnic, course) {
        this.name = name;
        this.fatherName = fatherName;
        this.age = age;
        this.cnic = cnic;
        this.course = course;
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    }
}

// new

// 1- Empty Object {}
// 2- this = {}
// 3 - return this
// 4 - constructor call 

// const s1 = new StudentAdmission('Ali', 'Aftab', 23, '42101-123456789', 'Web & Mobile App development')

// const s2 = new StudentAdmission('Furqan', 'Ahmed', 19, '42101-987654321', 'Data Science')

// const s3 = new StudentAdmission('Bilal', 'Junaid', 19, '42101-987654321', 'Data Science')

// const classInstance = [s1, s2, s3]

// for (let i = 0; i < classInstance.length; i++) {
//     classInstance[i].greeting();
// }



// Inheritance

// class TeacherAdmission extends StudentAdmission {
//     qualification;
//     experience;

//     constructor(name, fatherName, age, cnic, course, qualification, experience) {
//         super(name, fatherName, age, cnic, course);

//         this.qualification = qualification;
//         this.experience = experience;


//     super.greeting();
//     }

//     // Overriding the greeting method from StudentAdmission class

//     greeting(){
//         console.log(`Hello ${this.name}, you are a teacher with ${this.qualification} qualification and ${this.experience} of experience.`);
//     }
// }

// const t1 = new TeacherAdmission('Ali', 'Aftab', 30, '42101-123456789', 'Mathematics', 'Bachelor', '2 years');
// // console.log(t1);

// t1.greeting();



// Encapsulation


class EncapsulatedStudent {
    #name; // Private property
    #age; // Private property
    cnic;

    constructor(name, age, cnic) {
        this.#name = name;
        this.#age = age;
        this.cnic = cnic;
    }

    #greeting(){
        console.log(`Hello ${this.#name}, you are ${this.#age} years old.`);
        
    }

}


const student = new EncapsulatedStudent("Ali", 23, "42101-123456789");


// student.#greeting();




// student.#name = "Furqan"; // Direct access to private property (not recommended)

console.log(student);