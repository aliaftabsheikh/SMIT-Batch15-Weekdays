const express = require('express');

const productRouter = express.Router();
const validator = require('validator');
const {Demiproducts} = require('../data/products_data');

const { Product } = require('../model/products');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model/auth');
const { AuthMiddleware } = require('../middleware/auth');


productRouter.get('/get-all-products',
    async (req, res)=>{
    try {

        const {user} = req;

        console.log('Authenticated user:', user);

        const products = await Product.find({});
        res.status(200).send({message: "Products fetched successfully", products});
    } catch (error) {
        res.status(400).send({message: "Bad Request", error: error.message});
    }
})


productRouter.get('/get-product/:id',  
    

    async (req, res)=>{
    try {
        const { id } = req.params;

        const product =  await Product.findById(id);

        if(!product){
            throw new Error('Product not found');
        }

        res.status(200).send({message: "Product fetched successfully", product});
    } catch (error) {
        res.status(400).send({message: "Bad Request", error: error.message});   
    }
})


productRouter.post('/add-product' , async (req, res)=>{
    try {
        const {user} = req;

        console.log('Authenticated user from add-product route:', user);
        const { name, description, price, category, stock, seller, images } = req.body;
        
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            seller,
            images,
        });

        await product.save();
        res.status(201).send({message: "Product added successfully", product});
    } catch (error) {
        res.status(400).send({message: "Bad Request", error: error.message});
    }
})

productRouter.post('/add-multiple-products', async (req, res)=>{
    try {
        const products = req.body;

        if(!Array.isArray(products) || products.length === 0){
            throw new Error('Products must be a non-empty array');
        }

        const savedProducts = await Product.insertMany(products);
        res.status(201).send({message: "Products added successfully", products: savedProducts});
    } catch (error) {
        res.status(400).send({message: "Bad Request", error: error.message});
    }
})


productRouter.delete('/delete-product/:id', async (req, res)=>{

    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if(!deletedProduct){
            throw new Error('Product not found');
        }

        res.status(200).send({message: "Product deleted successfully", product: deletedProduct});
    } catch (error) {
          res.status(400).send({message: "Bad Request", error: error.message});
    }
}
)

productRouter.put('/update-product/:id', async (req, res)=>{
    try {
        const { id } = req.params;

        const updates = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { runValidators: true });

        if(!updatedProduct){
            throw new Error('Product not found');
        }

        res.status(200).send({message: "Product updated successfully", product: updatedProduct});
    } catch (error) {
        res.status(400).send({message: "Bad Request", error: error.message});
    }
})

module.exports = {
    productRouter
};