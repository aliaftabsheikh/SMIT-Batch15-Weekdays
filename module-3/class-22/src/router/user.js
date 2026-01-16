const express = require('express');
const { User } = require('../model/users');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();

userRouter.get('/profile', async (req, res)=>{
    try {

        const {token} = req.cookies;

        if(!token){
            throw new Error('Please login first !');
        }

        const decoded = await jwt.verify(token, process.env.SECRET_KEY);

        const {id} = decoded;

        const user = await User.findById(id);
        res.status(200).send({message: "User profile fetched successfully", user});

    } catch (error) {
        res.status(400).send({message: "Bad Request: ", error: error.message});
    }
})


module.exports = {
    userRouter
};