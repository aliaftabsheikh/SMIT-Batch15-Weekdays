const mongoose = require('mongoose');

const { Schema } = mongoose


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        trim: true,
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        min: 10,
        max: 40,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
},
    {
        collection: 'users',
        timestamps: true
    }
)


const User = mongoose.model('User', userSchema);

module.exports = {
    User
};