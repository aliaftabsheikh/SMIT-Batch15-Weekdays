// console.log('Start');

// setTimeout(()=>{
//     console.log("HELLO WORLD 123 ");
// }, 1)

// setTimeout(()=>{
//     console.log("HELLO WORLD ");
// }, 0)



// console.log('End');


// const btn = document.querySelector('button')

// btn.addEventListener('click', function () {
//     console.log('Button Clicked')
// })

// console.log('End');


console.log("Start")

setTimeout(()=>{
    console.log("HELLO WORLD ");
}, 1000)


fetch('https://api.github.com/users/aliaftabsheikh').then(
    function(){
        console.log('API resolved')
    }
)

console.log('END');


