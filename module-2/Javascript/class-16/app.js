// let fullName = "Ahmed"

// function greeting(){
//     fullName = "Ali"
//     console.log("Hello " + fullName)
// }

// greeting()
// console.log("Hello outside from " + fullName)


// let dayOfWk = "Sat"

// switch (dayOfWk) {
//     case "Sat":
//         console.log("Whoopee");
//         break;
//     case "Sun":
//         console.log("Whoopee SUN");
//         break;
//     case "Fri":
//         console.log("TGIF!");
//         break;
//     default:
//         console.log("Shoot me now!");
// } 


// function grading(marks) {
// if(marks >= 90){
//     return "A+"
// }else if(marks >= 80){
//     return "A"
// }else if(marks >= 70){
//     return "B"
// }else if(marks >= 60){
//     return "C"
// }else if(marks >= 50){
//     return "D"
// }else{
//     return "Fail"
// }

//     switch (true) {



//         case marks >= 90:
//             return "A+";

//         case marks >= 80:
//             return "A"

//         case marks >= 70:
//             return "B"

//         case marks >= 60:
//             return "C"

//         case marks >= 50:
//             return "D"

//         default:
//             return "Fail";
//     }
// }


// function addMarks() {
//     let marks = +prompt("Enter your Percentage", 80)
//     let grade = grading(marks)

//     alert("Your Grade is: " + grade)
// }

// addMarks()



// let isSchool = false;

// // console.log(isSchool ? "School is Open" : "School is Closed")


// isSchool && (
//     console.log("School is Open")
// )


const person = {
    name: 'Ali',
    age: 23,
    'campus name': 'Saylani',
    class: {
        name: 'Web and Mobile',
        timing: '9 to 12'
    },
}

console.log(person.age)
person.age = 13;


// console.log(person['campus name'])