// const {sum} = require('./calculate/sum.js')
// const {multiply} = require('./calculate/multiply.js')
// const {divide} = require('./calculate/divide.js')
// const {subtract} = require('./calculate/subtract.js')
// require('./greet')



(function(module, require){

    console.log(module);
    console.log(require);
    
    
console.log('This is greet file ');

let a = 10 

function b(){
    console.log('B');
    
}


})(module, require)

console.log(b());

console.log(a);

let a = 20

console.log(a);




const calculate= require("./calculate");

// console.log('This is main file !!!');



// sum()


// function abc(){
//     console.log('This is ABC !!!!');
    
//     function def(){
//         console.log("HELLO");
        
//     }
//     var a = 10
// }

// abc()

// console.log(a)

// console.log(def());

// calculate.sum(10, 30)
// calculate.subtract(30, 10)
// calculate.multiply(10, 30)
// calculate.divide(20, 10)
