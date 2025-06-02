// const cart = ['Shirt', 'Pants', 'Shoes'];

// const promise = createOrder(cart) //--> PROMISE !!

// promise.then((orderId) => {
//     console.log(`Order created with ID: ${orderId}`);
//     return payment(orderId)
// }).then((paymentStatus) => {
//     console.log(`Payment Status: ${paymentStatus}`);
// }).catch((error) => {
//     console.log(`Error: ${error.message}`);
// }).then(()=>{
//     console.log("This will always execute, regardless of success or failure.");
// })





// function validateCart(cart) {
//     return true
// }

// function payment(orderId) {
//     return new Promise(function (resolve, reject) {

//         setTimeout(() => {
//             if (orderId === 1234567890) {
//                 resolve('Payment Successful');
//             } else {
//                 const err = new Error('Payment Failed');
//                 reject(err);
//             }
//         }, 3000)


//     })

// }

// function createOrder(cart) {

//     const promise = new Promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             const err = new Error('Cart is not valid');
//             reject(err);
//         }

//         const orderId = 1234567890;
//         resolve(orderId)

//     })

//     return promise;
// }



// ASYNC/AWAIT 


// fetch ---> PROMISE ----> then/catch

// fetch('https://fakestoreapi.com/products')
// .then((response)=> response.json())
// .then((data)=>{
//     console.log("DATA --->",data);
// })



// ASYNC 

// async function getProducts(){
//    return "HELLO WORLD !"
// }

// console.log(getProducts()); 


// getProducts().then((data) => console.log(data));



// AWAIT  ---> Await always execute inside an async function

// async function getProducts() {
//     const response = await fetch('https://fakestoreapi.com/products')

//     const data = await response.json()
//     console.log("DATA --->", data);

//     // console.log("RESPONSE --->", response);
// }

// getProducts();



