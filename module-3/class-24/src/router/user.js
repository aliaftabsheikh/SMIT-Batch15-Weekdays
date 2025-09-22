const express = require('express')

const { userAuth } = require('../middleware/user');


// Creating routes

const userRouter = express.Router()

userRouter.get('/profile', userAuth, async (req, res)=>{
    try {
    
        
        const user = req.user

        res.send(user)

    } catch (error) {
           res.status(400).send({
            message: 'Profile error !',
            error: error.message
        })
    }
})

module.exports = {
    userRouter
}