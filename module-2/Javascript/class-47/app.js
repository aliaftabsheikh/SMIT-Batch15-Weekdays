
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("PROMISED 1 RESOLVED !!")
    }, 2000)
})

const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("PROMISED 2 RESOLVED !!")
    }, 4000)

  
})


async function getData() {
    // promise.then((response)=> console.log(response))
    // promise1.then((response)=> console.log(response))

    console.log('Hello World 1 ');

    const p1 = await promise
    console.log(p1);


    const p2 = await promise1
    console.log(p2);


}

// getData()


// console.log('Hello World 2 ');



async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/productsss')

        const data = await response.json()

        console.log(data);
       return data
       
    } catch (error) {
        console.log(error)

        console.log("Error in fetching data");   
    }
}


fetchData()




// OOP ____ Object Oriented Programming



