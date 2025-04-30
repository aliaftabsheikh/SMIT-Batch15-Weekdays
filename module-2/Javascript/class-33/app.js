// Execution Context
// Variables & Hoisting
// Funtions & Hoisting
// window & this
// Not defined/ undefined
// Call Stack
// Chain Scoping/ Lexical Environment
// Block Scope/ Shadowing
// Global Scope
// Temporal Dead Zone


// Write a Closure function

function a(){
    var num = 10
     function b(){
        console.log(num)
    }

    b()
}

a()