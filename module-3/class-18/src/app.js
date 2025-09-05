const express = require('express');

const { connectDB } = require('./config/database');
const { User } = require('./model/user');

const app = express()
app.use(express.json());
// CRUD 


app.use('/getUsers', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send('Error adding user')
    }
})

app.use('/addUser', async (req, res) => {
    const data = req.body
    try {
        const user = await User.insertMany([
            data
        ])

        res.send('User added successfully !', user)
    } catch (error) {
        res.status(500).send('Error adding user' + error)
    }
})


app.use('/updateUser/:id', async (req, res) => {
    const data = req.body
    const { id } = req.params
    try {
        const user = await User.findByIdAndUpdate(id, data, {
            returnDocument: 'after'
        })
        res.send('User updated successfully !' + user)
    } catch (error) {
        res.status(500).send('Error updating user')
    }
})

app.use('/deleteUser/:id', async (req, res) => {
    const { id } = req.params
    try {
        await User.findByIdAndDelete(id)
        res.send('User deleted successfully !')
    } catch (error) {
        res.status(500).send('Error deleting user')
    }
})

connectDB().then(() => {
    console.log('Database connected');

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}).catch((error) => {
    console.error('Database connection failed:', error);
});