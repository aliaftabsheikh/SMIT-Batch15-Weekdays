const express = require('express')
const { AdminAuth, UserAuth } = require('./middleware')
const app = express()


app.use('/products/:id', (req, res) => {
    const { id } = req.params

    res.send(`Fetch product : ${id}`)
})

app.use('/products', (req, res) => {
    res.send('this is products route !')
})



app.use('/user', 
    UserAuth,
//     (req, res, next) => {
//     console.log('First route handler');

//     const isUserAuthenticated = true;

//     if(isUserAuthenticated){
//         next()
//     }else{
//         res.status(401).send('Unauthorized User !')    
//     }
//     // res.send('First route handler')
// },
    (req, res) => {
        console.log('Second route handler');
        res.send('Second route handler')
    }
)


//FIRST APPROACH 

// app.use('/admin', (req, res, next) => {
//     const token = 123

//     const isAuthenticated = token === 123

//     if (!isAuthenticated) {
//         res.status(401).send('Unauthorized User !')
//     } else {
//         next()
//     }

// });


// app.use('/admin/getAllData', (req, res) => {
//     console.log('Admin get all data');
//     res.send('Admin get all data');
// })


// app.use('/admin/deleteAllData', (req, res) => {
//     console.log('Admin delete all data');
//     res.send('Admin delete all data');
// })

// app.use('/admin/updateAllData', (req, res) => {
//     console.log('Admin update all data');
//     res.send('Admin update all data');
// })

// app.use('/admin/createAllData', (req, res) => {
//     console.log('Admin create all data');
//     res.send('Admin create all data');
// })


// SECOND APPROACH !!
// app.use(
//     '/', 

//     'RH',
//     'RH1',
//     'RH2'
// )




app.use('/admin/getAllData', AdminAuth,

    (req, res) => {
        console.log('Admin get all data');
        res.send('Admin get all data');
    })




app.use('/admin/deleteAllData', AdminAuth,
    
    (req, res) => {
    console.log('Admin delete all data');
    res.send('Admin delete all data');
})

app.use('/admin/updateAllData', AdminAuth, (req, res) => {
    console.log('Admin update all data');
    res.send('Admin update all data');
})

app.use('/admin/createAllData', AdminAuth, (req, res) => {
    console.log('Admin create all data');
    res.send('Admin create all data');
})




app.use('/', (req, res) => {
    res.send('This is my first api :)')
})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})