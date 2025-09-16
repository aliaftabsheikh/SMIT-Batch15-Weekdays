const express = require('express');
const { connectDB } = require('./config/database');
const { User } = require('./model/user');
const bcrypt = require('bcrypt')
const validator = require('validator')
const app = express()


app.use(express.json())

app.use('/addUser', async (req, res) => {
    const data = req.body
    try {
        const user = await User(data)

        await user.save()

        res.send({
            message: 'User added successfully !',
            data: user
        })
    } catch (error) {
        res.status(400).send({
            message: 'Error adding user',
            error: error.message
        })
    }
})


app.use('/editUser/:id', async (req, res) => {
    if (req.method === 'PUT') {


        const data = req.body



        const { id } = req.params
        console.log("ID-->", id);

        console.log("DATA --->", data);

        try {


            const ALLOWED_UPDATES = [
                "password", "gender", "age", "firstName", "lastName", "about", "skills", "photoURL"
            ]



            const isUpdatedAllow = Object.keys(req.body).every((update) => ALLOWED_UPDATES.includes(update))

            if (!isUpdatedAllow) {
                throw new Error("Invalid updates")
            }

            if (data.skills.length > 10) {
                throw new Error("Minimum 10 skills allowed!")
            }

            const user = await User.findByIdAndUpdate(id, data, { runValidators: true, returnDocument: 'after' })
            res.send({
                message: 'User updated successfully !',
                data: user
            })
        } catch (error) {
            res.status(400).send({
                message: 'Error updating user',
                error: error.message
            })
        }
    }

    else {
        res.send('Invalid request method')
    }



})


app.use('/signup', async (req, res) => {
    try {

        // STEP 1 : Validation !
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName) {
            throw new Error('Name is not Valid !')
        } else if (!validator.isEmail(email)) {
            throw new Error("Email is not valid !")
        } else if (!validator.isStrongPassword(password)) {
            throw new Error("Password is not valid !")
        }

        // STEP 2: ADD User in Database 


        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword);
        

        const user = await User({
            firstName,
            lastName,
            email,
            password: hashedPassword        
        })

        await user.save()

        res.send({
            message: "User signup successfully !",
            data: user
        })


    } catch (error) {
        res.status(400).send({
            message: 'Signup error !',
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

