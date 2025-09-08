const express = require('express');
const { connectDB } = require('./config/database');
const { User } = require('./model/user');

const app = express()
app.use(express.json());
// CRUD



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
    const data = req.body
    const { id } = req.params
    try {
        const user = await User.findByIdAndUpdate(id, data)
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
})


connectDB().then(() => {
    console.log('Database connected');

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

}).catch((error) => {
    console.log('Database connection error:', error)
});
