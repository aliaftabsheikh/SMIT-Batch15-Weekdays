const express = require('express')

const app = express()


// app.use('/', (req, res)=>{
//    if(req.method === 'GET'){
//     res.send('GET RESPONSE !')
//    }

//    if(req.method === 'POST'){
//     res.send('POST RESPONSE !')
//    }

//    if(req.method === 'PUT'){
//     res.send('PUT RESPONSE !')
//    }

//    if(req.method === 'DELETE'){
//     res.send('DELETE RESPONSE !')
//    }

//    res.send('HELLO WORLD !')
// })




// app.use('/products/:id', (req,res)=>{
//     res.send(`Product API for product ID: ${req.params.id}`)
// })


// app.use('/products', (req,res)=>{
//     res.send('Products API')
// })


app.use('/user',
     [
    (req, res, next) => {
        console.log('This is the first middleware');
        next()
        res.send('This is the first middleware')
    },
    (req, res, next) => {
        console.log('This is the second middleware');
        next()
        res.send('This is the second middleware')
    },
    (req, res, next) => {
        console.log('This is the third middleware');
        next()
        res.send('This is the third middleware')
    },
    (req, res) => {
        console.log('User API');
        res.send('User API')
    }
]
)




// app.use('/', (req,res)=>{
//     res.send('My first API !')
// })






app.listen(3000, () => {
    console.log('Server is listening on port 3000!');

})