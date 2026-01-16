const express = require('express');

const authRouter = express.Router();
const validator = require('validator');
const { validationSignup, validationLogin } = require('../lib/utils');
const { User } = require('../model/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


authRouter.post('/signup', async (req, res)=>{
   try {
    // First Step 
    validationSignup(req.body);

    
      

    // Second Step

     const {
    name, age, email, password, gender
    } = req.body;

    const user = await User.findOne({email});

    if(user){
        throw new Error('User already exists with this email');
    }


    // Third Step 

    const hashedPassword = await bcrypt.hash(password, 10);


    // Fourth Step

    const newUser = await User({
        name, 
        age, 
        email, 
        password: hashedPassword,
        gender
    })

    await newUser.save();

    res.status(201).send({message: "User created successfully", user: newUser});




   } catch (error) {
    res.status(400).send({message: "Bad Request: ", error: error.message});
   }
})

authRouter.post('/login', async (req, res)=>{
   try{
    // First Step 
    validationLogin(req.body);

    // Second Step

    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(!user){
        throw new Error('Invalid login credentials');
    }

    // Third Step 

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if(!isPasswordMatched){
        throw new Error('Invalid login credentials');
    }

    // Fourth Step

    const token = jwt.sign({
        id: user._id,
    }, process.env.SECRET_KEY, { expiresIn: '1h' })


       res.cookie('token', token, {
        expires: new Date(Date.now() + 3600000), // 1 hour
    } )
 


    res.status(200).send({message: "Login successful", user: user});




   }catch(error){
 res.status(400).send({message: "Bad Request: ", error: error.message});
   }
})


module.exports = {
    authRouter
};