// CALLBACK HELL

// -Async Task 
// Callback function passed to the async task
// We don't have control over the execution of the callback function
// Hard to Debug

// -- Callback Hell
// -- Inversion of Control (IOC)
// -- Pyramid of Doom


// PROMISES
// -Async Task

// {data: undefined} // Promise Object
// -Promise State: fulfilled, rejected, pending
// -then
// Callback funtion attached to the promise
// if Promise is fulfilled, then the callback function will be executed 1 time is guaranteed
// Easy to Debug


const cart = ['Shoes', 'Pants', 'Shirt'];

// const api = {
//     //
//     //
//     //
//     //
// }


// api.createOrder(cart, function (orderId) {
//     api.payment(orderId, function (paymentStatus) {
//         api.getOrderDetails(orderId, function (orderDetails) {
//             api.fulfillOrder(orderId, function (fulfillmentStatus) {
//                 api.payment(orderId, function (paymentStatus) {
//                     api.getOrderDetails(orderId, function (orderDetails) {
//                         api.fulfillOrder(orderId, function (fulfillmentStatus) {
//                             api.payment(orderId, function (paymentStatus) {
//                                 api.getOrderDetails(orderId, function (orderDetails) {
//                                     api.fulfillOrder(orderId, function (fulfillmentStatus) {
//                                         api.payment(orderId, function (paymentStatus) {
//                                             api.getOrderDetails(orderId, function (orderDetails) {
//                                                 api.fulfillOrder(orderId, function (fulfillmentStatus) {
//                                                     console.log(`Order ID: ${orderId}`);
//                                                     console.log(`Payment Status: ${paymentStatus}`);
//                                                     console.log(`Order Details: ${orderDetails}`);
//                                                     console.log(`Fulfillment Status: ${fulfillmentStatus}`);
//                                                 });
//                                             });

//                                         })
//                                     });
//                                 });

//                             })
//                         });
//                     });

//                 })
//             });
//         });

//     })
// })

// PROMISES

// const promise = createOrder(cart)  //API

// promise.then(function(orderId){
//    return payment(orderId)
// }).then(function (paymentStatus){
//     return getOrderDetails(paymentStatus)
// }).then(function (orderDetails){
//     return fulfillOrder(orderDetails)
// }).then(function (fulfillmentStatus){
//     console.log(`Fulfillment Status: ${fulfillmentStatus}`);
// })

// promise.then(orderid => payment(orderid))
// .then(paymentStatus => getOrderDetails(paymentStatus))
// .then(orderDetails => fulfillOrder(orderDetails))
// .then(fulfillmentStatus => {
//     ceonsole.log(`Fulfillment Status: ${fulfillmentStatus}`);
// })


const promise = createOrder(cart) //--> PROMISE !!

promise.then((orderId) => {
    console.log(`Order created with ID: ${orderId}`);
    return payment(orderId)

}).then((paymentStatus) => {
    console.log(`Payment Status: ${paymentStatus}`);
}).catch((error) => {
    console.log(`Error: ${error.message}`);
})




function validateCart(cart) {
    return true
}

function payment(orderId) {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            if (orderId === 123456789) {
                resolve('Payment Successful');
            } else {
                const err = new Error('Payment Failed');
                reject(err);
            }
        }, 3000)


    })

}

function createOrder(cart) {

    const promise = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error('Cart is not valid');
            reject(err);
        }

        const orderId = 1234567890;
        resolve(orderId)

    })

    return promise;
}