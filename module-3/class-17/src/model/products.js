const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true,


    },

    email: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
    },

    description: {
        type: String,
    },

    image: {
        type: String,
        required: true,

        default: "default.jpg"
    }
},
{
    collection: 'products',
    timestamps: true
}
)




const Product = mongoose.model('Product', productSchema);

module.exports = {
    Product
};