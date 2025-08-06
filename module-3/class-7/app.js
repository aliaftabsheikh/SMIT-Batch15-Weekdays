const {welcomeMessage, greet} = require('./greet.js')

// (
//     function () {
//         const welcomeMessage = 'Hello !'

//         function greet(message) {
//             console.log(message, 'from function !');
//         }

//     }
// )


// const welcomeMessage = 'Hello !'

// function greet(message){
//     console.log(message, 'from function !');
// }


// console.log('This is main file !')

// greet('Hello from Main file !', welcomeMessage)



// function a(){
//     console.log('A');

//     function b(){
//         console.log('B');
//     }
//     var c = 20

// b()

// }

// a()


// console.log(c);


// IIFE

// (function (require, module) {
//     console.log('This is IIFE Function !');


//     function greet(message) {
//         console.log(message, 'from IIFE !');
//     }

//     greet(require)
//     greet(module)

// }
// )('require', 'module')


greet(
    'Hello '
)
