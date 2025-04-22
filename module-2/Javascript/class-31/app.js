// Lexical Environment/Scope Chaining
// Block Scope
// Temporal Dead Zone (TDZ)


    // function b(){
    //     c()
    //     let a = 10;
    //     function c (){
    //         console.log(a); 
    //     }
    // }

    // b()

    

var a = 10;

{
    let a = 20;
    console.log(a);

    function d (){
        var c = 30;
        console.log(c);
    }
}
console.log(c);
