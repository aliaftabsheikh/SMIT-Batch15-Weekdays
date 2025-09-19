const express = require('express');
const { connectDB } = require('./config/database');
const { User } = require('./model/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken');
const { userAuth } = require('./middleware/user');

const app = express()

app.use(express.json())
app.use(cookieParser())

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
        const token = await jwt.sign({id: user._id}, 'Ali@4321', {expiresIn: '1d'})

        console.log("TOKEN--->", token);
        

        res.cookie("token", token)

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

app.post('/logout', (req, res)=>{
      res.cookie("token", null, {
            expires:  new Date(Date.now()  * 0), 
        }) 

    res.send("Logout Successfully !")
})


app.get('/profile', userAuth, async (req, res)=>{
    try {
        // const {token} = req.cookies
      
        // const {id} = await jwt.verify(token, "Ali@4321")


        // const user = await User.findOne({_id: id})

        const user = req.user

        res.send(user)

    } catch (error) {
           res.status(400).send({
            message: 'Profile error !',
            error: error.message
        })
    }
})


app.post('/addProduct', userAuth,  async (req, res)=>{
    try {
        const {firstName} = req.user
        console.log("User from Add Product API-->", firstName);
        
        res.send(`Product added by ${firstName}`)
    } catch (error) {
          res.status(400).send({
            message: 'Add Product error !',
            error: error.message
        })
    }
})


connectDB().then(()=>{
console.log("Database connected !");

app.listen(3000, ()=>{
    console.log('Server is running on port 3000 !');
    
})
}).catch((err)=>{
    console.log("Database is not connected !", err);
    
})
