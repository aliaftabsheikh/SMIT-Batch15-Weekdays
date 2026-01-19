const mongoose = require('mongoose');

const { Schema } = mongoose
const validator = require('validator')

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 500,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 0,
        validate(value) {
            if (value <= 0) {
                throw new Error('Price must be greater than 0')
            }
        }
    },

    discountPrice: {
        type: Number,
        min: 0
    },

    category: {
        type: String,
        required: true,
        enum: ["Electronics", "Clothing", "Home & Garden", "Sports", "Beauty", "Books", "Toys", "Food"]
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },

    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },

    reviews: {
        type: [String]
    },

    seller: {
        type: String,
        required: true,
        trim: true
    },

    images: {
        type: [String],
        default: ["https://via.placeholder.com/300"]
    },

    inStock: {
        type: Boolean,
        default: true
    },

    deliveryTime: {
        type: String,
        default: "3-5 business days"
    },

    currency: {
        type: String,
        default: "PKR"
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