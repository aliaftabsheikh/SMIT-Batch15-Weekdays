// WINDOW
// NOT DEFINED / UNDEFINED
// Call Stack
// Chain Scoping/ Lexical Environment

// var a = 10;
// var b = 20


// console.log(window.a)
// console.log(this.b)


// console.log(a);
// console.log(b);


// console.log(window.alert());
// console.log(window.console.log());




var a = 10

function b() {

    console.log("B")

    function c() {
        console.log("C")
        console.log(a)

    }
    c()
}



b()

// function b(){
//     function c(){
//         console.log()
//     }
// }
