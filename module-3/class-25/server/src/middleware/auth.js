const jwt = require('jsonwebtoken');
const { User } = require('../model/auth');

const AuthMiddleware =  async (req, res, next)=>{

       try {
         const {token} = req.cookies;

        if(!token){
            throw new Error('Authentication required. Please login first !');
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const {id} = decoded

        const user = await User.findById(id);

        if(!user){
            throw new Error('User not found. Invalid authentication token');
        }

        req.user = user;



        next()

       } catch (error) {
        res.status(400).send({message: "Bad Request", error: error.message});
       }

    }


    module.exports = {
        AuthMiddleware
    };