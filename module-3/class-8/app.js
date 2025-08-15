// Create first Server

const express = require('express')

const app = express()


// API

app.get('/',(req, res)=>{
    res.send("This is main route!")
})

//    'Route' // Route Handler
app.get('/user', (req, res) => {
    res.send([
        {
            id: 1,
            name: 'Ali'
        },
        {
            id: 2,
            name: 'Hammad'
        },
        {
            id: 3,
            name: 'Waqar'
        },
    ])
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

