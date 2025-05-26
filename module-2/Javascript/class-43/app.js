import { dummyData } from "./data.js";
// console.log("First Line");
// setTimeout(function () {
//     console.log("Third Line");

// }, 3000)

// console.log("Second Line");


const cart = ['Shirt', 'Pants', 'Shoes'];

// ASYNC TASK ===> CALLBACK FUNCTION 


// CALLBACK HELL 

const api = {
    ////
    /////
    ///
    ///
    ///
}


// api.createOrder(cart, function (orderId) {
//     console.log(`Order created with ID: ${orderId}`);
//     api.proceedToPayment(orderId, function (paymentStatus) {
//         console.log(`Payment Status: ${paymentStatus}`);
//         api.getOrderDetails(orderId, function (orderDetails) {
//             console.log(`Order Details: ${orderDetails}`);
//             api.fulfillOrder(orderId, function (fulfillmentStatus) {
//                 console.log(`Fulfillment Status: ${fulfillmentStatus}`); 
//             });
//         });
//     });
// })



// PROMISES 


// createOrder(cart, function(orderId){
//     console.log(`Order created with ID: ${orderId}`);
// })

// const cartPromise = createOrder(cart)

// {data: undefined}   //Promise Object

// PROMISE STATE : fulfilled, rejected, pending
// then
// cartPromise.then(function(orderId){
//     console.log(`Order created with ID: ${orderId}`);
// })


// fetch('https://fakestoreapi.com/products',
    
// ).((response) => response.json()).then((data) => {
//     console.log("DATA ___", data);
// })


console.log("DATA ___", dummyData);



// console.log("DATA ___",data);
