const express = require('express');
const { connectDB } = require('./config/database');
const { Product } = require('./model/products');

const app = express()

app.use(express.json());

const demiData = [
    {
        name: "Demi Product 1",
        price: 10.99,
        description: "Description for Demi Product 1",
        image: "image1.jpg"
    },
    {
        name: "Demi Product 2",
        price: 12.99,
        description: "Description for Demi Product 2",
        image: "image2.jpg"
    },
    {
        name: "Demi Product 3",
        price: 9.99,
        description: "Description for Demi Product 3",
        image: "image3.jpg"
    },
    {
        name: "Demi Product 4",
        price: 14.99,
        description: "Description for Demi Product 4",
        image: "image4.jpg"
    },
    {
        name: "Demi Product 5",
        price: 11.99,
        description: "Description for Demi Product 5",
        image: "image5.jpg"
    },
    {
        name: "Demi Product 6",
        price: 13.99,
        description: "Description for Demi Product 6",
        image: "image6.jpg"
    },
    {
        name: "Demi Product 7",
        price: 10.49,
        description: "Description for Demi Product 7",
        image: "image7.jpg"
    },
    {
        name: "Demi Product 8",
        price: 12.49,
        description: "Description for Demi Product 8",
        image: "image8.jpg"
    },
    {
        name: "Demi Product 9",
        price: 9.49,
        description: "Description for Demi Product 9",
        image: "image9.jpg"
    },
    {
        name: "Demi Product 10",
        price: 14.49,
        description: "Description for Demi Product 10",
        image: "image10.jpg"
    }
]

app.use('/products', async (req, res) => {

    const body = req.body

    if (req.method === 'GET') {
        try {
            const products = await Product.find({})

            res.send(products)
        } catch (error) {
            res.status(400).send('Error fetching products')
        }
    }


    if (req.method === 'POST') {

        try {
            const products = await Product.insertMany([body])

            console.log("Products inserted:", products);

            res.send('Products added successfully !')
        } catch (error) {
            res.status(400).send('Error adding products')
        }

    }
})


app.use('/product/:id', async (req, res) => {
    const { id } = req.params

    const product = await Product.findById(id)

    if (!product) {
        res.status(404).send('Product not found !')
    }

    res.send(product)
})






connectDB().then(() => {
    console.log("Database connected !");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}).catch((error) => {
    console.error("Database connection failed:", error);
});

