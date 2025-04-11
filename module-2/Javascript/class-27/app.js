
const person1 = {
    name: 'Ali',
    age: 23,
    "father's Name": 'Aftab',
    "roll No": 1,
    courses: {
        wmd: "Web & Mobile App Development",
        gda: "Graphic Designing & video Animation",
        genai: "Generative Ai" 
    }
}



// for(key in person){
//     console.log(`${key} : ${person[key]}`)
// }

// console.log(person.courses.genai);
// const courses = 'courses'
// const courseName = 'gda'

// console.log(person['courses']['gda'])
// console.log(person[courses][courseName]);


// console.log(person["father's Name"]);
// console.log(person["roll No"]);



// const admissionInfo = [
//   {
//         name: 'Ali',
//         age: 23,
//         fatherName : 'Aftab',
//         rollNo: 1,
//         courses: {
//             wmd: "Web & Mobile App Development",
//             gda: "Graphic Designing & video Animation",
//             genai: "Generative Ai" 
//         },
//         marks: 40
//     },
//   {
//         name: 'Waqar',
//         age: 36,
//         fatherName: 'Arshad',
//         rollNo: 2,
//         courses: {
//             wmd: "Web & Mobile App Development",
//             gda: "Graphic Designing & video Animation",
//             genai: "Generative Ai" 
//         },
//         marks: 50
//     },
//   {
//         name: 'Hussain',
//         age: 40,
//         fatherName: 'Aizaz',
//         rollNo: 3,
//         courses: {
//             wmd: "Web & Mobile App Development",
//             gda: "Graphic Designing & video Animation",
//             genai: "Generative Ai" 
//         },
//         marks: 47
//     },
//   {
//         name: 'Aun',
//         age: 45,
//         fatherName: 'Abbas',
//         rollNo: 4,
//         courses: {
//             wmd: "Web & Mobile App Development",
//             gda: "Graphic Designing & video Animation",
//             genai: "Generative Ai" 
//         },
//         marks: 70
//     },
// ]

// for(let i = 0; i < admissionInfo.length; i++){
//    if(admissionInfo[i].age > 37){
//     console.log(admissionInfo[i].name ,"Beta course ki umar nikal gai !")
//    }else{
//     console.log(admissionInfo[i].name)
//    }
// }


// for(let i = 0; i < admissionInfo.length; i++){
//     if(admissionInfo[i].marks < 50){
//      console.log(admissionInfo[i].name ,"Better Luck Next Time !")
//     }else{
//      console.log(admissionInfo[i].name, "Bhai fees layainge to class mei bethainge !")
//     }
//  }


// const person = {
//     name: 'Ali',
//     age: 23,
//     "father's Name": 'Aftab',
//     "roll No": 1,
//     courses: {
//         wmd: "Web & Mobile App Development",
//         gda: "Graphic Designing & video Animation",
//         genai: "Generative Ai" 
//     }
// }

// ADD KEY
// person.contact = 1234567890

//Update Value
// person.age = 18


// Delete KEY/Value

// delete person.age

// console.log(person)





const person = {
    name: 'Ali',
    age: 23,
    "father's Name": 'Aftab',
    "roll No": 1,
    courses: {
        wmd: "Web & Mobile App Development",
        gda: "Graphic Designing & video Animation",
        genai: "Generative Ai" 
    },

    greeting(){
        console.log(`Hello ${this.name}`)
    }
}

person.greeting()