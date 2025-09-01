const express = require('express')
const { connectDB } = require('./config/database')
const { User } = require('./model/user')


const app = express()
app.use(express.json())


app.use('/signup', async (req, res) => {

    const body = req.body
    console.log(body);

    try {
        const user = await User.insertOne(body)
        user.save()
        res.send('User Signup')
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }


})


app.use('/signin', async (req, res) => {
    const {email, password} = req.body
    

    try {
        const user = await User.findOne({ email})
        
        if (!user) {
            return res.status(404).send('Invalid credentials !')
        }

        if(user.password === password){
            res.send("Login Successfully !!")
        } else {
            res.status(401).send('Invalid credentials !')
        }

        

    } catch (error) {
        res.status(500).send('Internal Server Error')
    }

    res.send('User Signin')
})




app.use('/', (req, res) => {
    res.send('Hello World!')
})


connectDB().then(() => {
    console.log('Connected to the Database !');

    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
}).catch((error) => {
    console.log('Database not connected', error);
});

