// PROMISES 

// {data: undefined}   //Promise Object

// Promise States 

// - pending
// - fulfilled
// - rejected 


// fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => console.log(data));




// ASYNC/ AWAIT

// async function greeting(){
//     return `Hello Ali`
// }


// greeting().then((response)=> console.log(response + " in SMIT"))


// async function fetchData(){
//     const response = await fetch('https://fakestoreapi.com/products') 

//     const data = await response.json()

//     console.log(data);
// }
// fetchData()



// AWAIT kabhi bhi wait nh krta 
// Timer apas mei sum hokar kese chal rha hai !
// Agar 2nd promise pehle resolve hogaya to first wale promise se pehle run q nh hoa ?



const promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("PROMISED 1 RESOLVED !!")
    }, 6000)
})

const promise1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("PROMISED 2 RESOLVED !!")
    }, 3000)
})


async function getData(){
    // promise.then((response)=> console.log(response))
    const p1 = await promise
    console.log(p1)

    const p2 = await promise1
    console.log(p2)

    console.log("Hello World !");
}


//PROMISED 2 Resolved
//PROMISED 1 Resolved
//Hello World !



//PROMISED 1 Resolved
//PROMISED 2 Resolved
//Hello World !

getData()