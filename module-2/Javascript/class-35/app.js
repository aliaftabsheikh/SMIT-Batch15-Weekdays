// function x() {
//     var a = 20;

//     return function y() {
//         console.log(a);
//     }
// }

// var z = x()


// z()
// console.log(z);



function x() {
    for (let i = 1; i <= 10; i++) {

        // function y(iterator) {
            setTimeout(function () {
                console.log(i);

            }, i * 1000)
        }

        // y(i)
    // }
}

x()

// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }


// FUNCTION STATEMENT 
// FUNCTION EXPRESSION
// FUNCTION DECLARATION
// ANONYMOUS FUNCTION
// FUNCTION CALL & INVOKING

// FUNCTION STATEMENT & FUNCTION DECLARATION & FUNCTION DEFINITION
// a()
// b()

// function a() {
//     console.log("Hello World")
// }


// FUNCTION EXPRESSION


// var b = function () {
//     console.log("Hello World")
// }

// FUNTION INVOKING


// IIFE (Immediately Invoked Function Expression)

// (function () {
//     console.log("Hello World")
// })()