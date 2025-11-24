const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: "This is product 1",
    },
    {
        id: 2,
        name: 'Product 2',
        description: "This is product 2",
    },
    {
        id: 3,
        name: 'Product 3',
        description: "This is product 3",
    },
]



app.get('/products', (req, res) => {
   try {
    res.json(products)
   } catch (error) {
    res.status(400).json({message: error.message})
   }
})

app.get('/products/:id', (req, res) => {
    try {
        const {id} = req.params;    

        const product = products.find(p => p.id === parseInt(id));

        if(!product){
            return res.status(404).json({message: 'Product not found'})
        }

        res.json(product);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

app.post('/products', (req, res) => {

    try {
        const {name, description}  = req.body;

        console.log("DATA RECEIVED FROM RTK ", {name, description});
        

        if(!name || !description){
            return  res.status(400).json({message: 'All fields are required: name, description'});
        }

        const newProduct = {
            id: products.length + 1,
            name,
            description
        };

        products.push(newProduct);

        res.status(201).json(newProduct);

    } catch (error) {
        res.status(400).json({message: error.message});
    }

})

app.put('/products/:id', (req, res) => {
    try {
        const {id} = req.params;

        const {name, description} = req.body;

        const product = products.find(p => p.id === parseInt(id));

        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }

        if(name) {
            product.name = name;
        }
        if(description) {
             product.description = description;
        }

        res.json({
            message: 'Product updated successfully',
            product
        });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

app.delete('/products/:id', (req, res) => {
    try {
        const {id} = req.params;

        const productIndex = products.findIndex(p => p.id === parseInt(id));

        if(productIndex === -1){
            return res.status(404).json({message: 'Product not found'});
        }

        products.splice(productIndex, 1);

        res.json({message: 'Product deleted successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})