const express = require('express')

const app = express()
app.use(express.json())


app.get('/', (req,res)=>{
    res.send('Hello World !')
})


app.post('/addProduct', (req, res)=>{
    const Product = req.body;

    console.log(Product);
    
    res.send({
        message: "Product added successfully !",
        addedProduct: Product
    })
})


app.get('/product/:id', (req, res)=>{
    const {id} = req.params
    
    // Get Single product logic

    res.send("Get product successfully  =====>" + id )
})


app.delete('/deleteProduct/:id', (req, res)=>{
    const {id} = req.params

    // Delete Logic 


    res.send("Product deleted successfully " + id)
})


app.put('/updateProduct/:productId', (req, res)=>{
    const {productId} =  req.params


    // Update product logic

    res.send("Updated product successfully "+ productId)
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000!");
    
})