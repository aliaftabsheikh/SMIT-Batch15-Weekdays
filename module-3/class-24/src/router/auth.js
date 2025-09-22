const express = require('express');
const { User } = require('../model/user');
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken');


const authRouter = express.Router()

authRouter.post('/signup', async (req, res) => {
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

        const token = await jwt.sign({ id: user._id }, 'Ali@4321', { expiresIn: '1d' })

        res.cookie("token", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // expires in 1 day
        })

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


authRouter.post('/login', async (req, res) => {
    try {

        
        const { email, password } = req.body

        const user = await User.findOne({
            email
        })

        if (!user) {
            throw new Error("Invalid Credentials !")
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (isValidPassword) {
            const token = await jwt.sign({ id: user._id }, 'Ali@4321', { expiresIn: '1d' })

            console.log("TOKEN--->", token);


            res.cookie("token", token, {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // expires in 1 day
            })

            res.send("Login Successful !")
        } else {
            throw new Error('Invalid Credentials!')
        }


    } catch (error) {
        res.status(400).send({
            message: 'Login error !',
            error: error.message
        })
    }
})


authRouter.post('/logout', (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now() * 0),
    })

    res.send("Logout Successfully !")
})


module.exports = {
    authRouter
}