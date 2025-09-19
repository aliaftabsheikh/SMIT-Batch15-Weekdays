const jwt = require('jsonwebtoken')
const { User } = require('../model/user')

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies

        if (!token) {
            throw new Error("Token is not valid !")
        }

        const {id} = await jwt.verify(token, "Ali@4321")

        const user = await User.findOne({_id: id})

        if(!user){
            throw new Error('User not found !')
        }
        
        req.user = user

        next()

    } catch (error) {
        res.status(400).send("ERROR: " + error.message);
    }

}

module.exports = {
    userAuth
}