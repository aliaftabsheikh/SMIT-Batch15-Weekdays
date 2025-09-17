const express = require('express')
const { connectDB } = require('./config/database')
const validator = require('validator')
const bcrypt = require('bcrypt')
const { User } = require('./model/user')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cookieParser())


app.use('/products', (req, res)=>{
    res.send("100 Products Listed !")
})
app.use('/profile', (req, res)=>{

    const {token} = req.cookies
    console.log("cookie---->", token);

    if(token){
           res.send("User Profile !")
    }else{
        res.status(401).send("Unauthorized User !")
    }

})

app.post('/signup',async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        //Step 1
        if (!firstName || !lastName) {
            throw new Error('Name is not valid !')

        } else if (!validator.isEmail(email)) {
            throw new Error('Email is not Valid !')
        } else if (!validator.isStrongPassword(password)) {
            throw new Error("Please use a strong password")
        }

        // Step 2

       
        const hashedPassword = await bcrypt.hash(password, 10)

       const user = await User({
        firstName,
        lastName,
        email,
        password: hashedPassword
       })

       await user.save()

       res.cookie("token", "1234567890asdfghjkl")

       res.send({
        message: "User signup successfully!",
        data: user
       })


    } catch (error) {
        res.status(400).send({
            message: 'Signup error !',
            error: error.message
        })
    }
})


app.post('/login', async (req,res)=>{
    try {
        const {email, password} = req.body

        const user = await User.findOne({
            email
        })
       
        if(!user){
            throw new Error("Invalid Credentials !")
        }

        const isValidPassword = await bcrypt.compare(password, user.password )

        if(isValidPassword){
        res.cookie("token", "1234567890asdfghjkl")

            res.send("Login Successful !")
        }else{
            throw new Error('Invalid Credentials!')
        }


    } catch (error) {
           res.status(400).send({
            message: 'Login error !',
            error: error.message
        })
    }
})







connectDB().then(() => {
    console.log("DATABASE connected !")

    app.listen(3000, () => {
        console.log('Server is running on port 3000 !');

    })


}).catch((err) => {
    console.log("DATABASE is not connected !")
})

