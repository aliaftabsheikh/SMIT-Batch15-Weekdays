// HIGHER ORDER FUNCTIONS 

// function x(y){
//     console.log('x');

//     y()
// }

// function y(){
//     console.log('y');

// }

// x(y) 


// map(()=> {})
// forEach(()=>{})
// reduce(()=>{})
// filter(()=>{})



// const radius = [3, 6, 8, 4, 2, 7]



// function calculateArea(){
//     let output = [];

//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }

//     return output
// }

// console.log("BEFORE",calculateArea())

// function calculateCircumference(){
//     let output = []

//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }

//     return output
// }

// function calculateDiameter(){
//     let output = []

//     for(let i = 0; i < radius.length; i++){
//         output.push(2  * radius[i])
//     }

//     return output
// }

const radius = [3, 6, 8, 4, 2, 7]

const area = (rad) => Math.PI * rad * rad
const circumference = (rad) => 2 * Math.PI * rad
const diameter = (rad) => 2 * rad


function calculate(rad, logic) {
    // let output = []

    // for (let i = 0; i < radius.length; i++) {
    //     output.push(logic(rad[i]))
    // }
    // return output
    
    return rad.map((item) =>logic(item))


}





// console.log(radius);
console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))


// map

// const value = [1, 2, 3, 4, 5]

// const newValue = value.map((item, index) => {
//     return item * 2
// })

// console.log(value);
// console.log(newValue);
