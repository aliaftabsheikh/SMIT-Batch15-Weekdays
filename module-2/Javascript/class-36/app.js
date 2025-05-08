// function x() {
//     var a = 20;


//     return function y() {
//       var a = 30
//         console.log(a);
//     }
// }

// var z = x()


// z()
// // console.log(z);


// function a(){
//     // var x = 20

//     function b(){
//         var x = 30
//         console.log(x);
//     }
//     b()

//     console.log(x);


// }

// a()


// function x() {
//     for (var i = 1; i <= 10; i++) {
//         function y(iterator){

//             setTimeout(function () {
//                 console.log(iterator);

//             }, iterator * 1)
//         }

//         y(i)
//     }       
// }

// x()

// for(var i = 1; i <= 1000; i++) {
//     console.log(i)
// }


// FUNCTION STATEMENT 
// FUNCTION EXPRESSION
// FUNCTION DECLARATION
// ANONYMOUS FUNCTION
// FUNCTION CALL & INVOKING
// FUNCTION WTIH ARGUMENTS & PARAMETERS
// NAMED FUNCTION EXPRESSION
// FIRST CLASS FUNCTION
// ARROW FUNCTION
// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// CALLBACK FUNCTION



// FUNCTION STATEMENT / FUNCTION DECLARATION / FUNCTION DEFINITION

// a()

// function a() {
//     console.log("A")
// }

// FUNCTION EXPRESSION

// b()

// const b = function(){
//     console.log("B");
//     // return "B"
// }


// const c = function(){
//     console.log("B");
//     // return "B"
// }


// ARROW FUNCTION 


// const a = () => "Hello World"


// console.log(a());



// NAMED FUNCTION EXPRESSION 

// var a = function abc (){
//     console.log("Hello World");   
// }

// abc()


// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

// (
//     function abc(){
//         console.log("Hello World")
//     }
// )()


// FIRST CLASS FUNCTION  / FIRST CLASS CITIZEN


// function x(y){
//    return y 
// }




// var z = x(function y(){
//     console.log("Hello World");
// })

// z()



// setTimeout(function(){
//     console.log("Hello World")
// }
// , 1000)