const mongoose = require('mongoose');

const { Schema } = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [5, 'Title must be at least 5 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        minlength: [20, 'Content must be at least 20 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},{
    collection: 'blogs',
    timestamps: true
}

)


const Blog = mongoose.model('blogs', blogSchema);

module.exports = {
    Blog
};