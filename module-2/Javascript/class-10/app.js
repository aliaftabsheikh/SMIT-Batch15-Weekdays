// ELSE IF


// const abc = true;

// if(abc){
//     console.log("HELLO!")
// }else{
//     console.log("World")
// }


// GRADING SYSTEM

// const percentage = +prompt("Enter your Percentage !", 40)

// if(percentage >= 80){
//   alert("GRADE A+")
// }else if(percentage >= 70){
//   alert("GRADE A")
// }else if(percentage >= 60){
//   alert("GRADE B")
// }else if(percentage >= 50){
//   alert("GRADE C")
// }else if(percentage >= 40){
//   alert("GRADE D")
// }else{
//   alert("Doodh supply krna shoro krdo !")
// }


//! FIZZ BUZZ 


// AGAR NUMBER DIVIDE HO 3 YA 5 SE OR REMAINDER AE 0 TO SHOW KRADO FIZZ BUZZ


// NUMBER DIVIDE HO 3 SE OR REMAINDER AE 0 TO SHOW KRADO FIZZ

//  NUMBER DIVIDE HO 5 SE OR REMAINDER AE 0 TO SHOW KRADO BUZZ


// const userInput = +prompt("Enter the Number !", 3)

// if(userInput % 3 === 0 && userInput % 5 === 0){
//     alert("FIZZ BUZZ !!!")
// }else if(userInput % 3 === 0){
//     alert("FIZZ")
// }else if(userInput % 5 === 0){
//     alert("BUZZ!")
// }else{
//     alert("SAHI NUMBER DALO !!!")
// }


const hour = new Date().getHours()

if(hour < 12){
    console.log("GOOD MORNING !")
}else if(hour  < 18){
    console.log("GOOD AFTERNOON !")
}else {
    console.log("GOOD NIGHT !")
}

