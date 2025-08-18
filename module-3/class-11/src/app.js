const express = require('express')

const app = express()
app.use(express.json())

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100
    },
    {
        id: 2,
        name: "Product 2",
        price: 200
    },
    {
        id: 3,
        name: "Product 3",
        price: 300
    }
]

// app.get('/', (req, res)=>{
//     res.send('Hello World !')
// })

// app.delete('/addProduct', (req, res)=>{
//     const body = req.body
//     res.send(body)
// }
// )


// PARAMS 


// app.get("/products", ()=>{})


// app.get("/getProduct/1", (req,res)=>{
//     res.send("Product 1 fetched")
// })
// app.get("/getProduct/2", (req,res)=>{
//     res.send("Product 2 fetched")
// })
// app.get("/getProduct/3", (req,res)=>{
//     res.send("Product 3 fetched")
// })


// app.get("/getProduct/:id", (req,res)=>{
//     const {id} = req.params
//     const product = products.find((product)=> product.id === parseInt(id))
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send("Product not found")
//     }
// })


// app.get("/product", (req, res) =>{
//     res.send('This is GET request')
// })

// app.post("/product", (req, res) =>{
//     res.send('This is POST request')
// })

// app.delete("/product", (req, res) =>{
//     res.send('This is DELETE request')
// })
// app.put("/product", (req, res) =>{
//     res.send('This is PUT request')
// })


// app.use('/',  (req, res) => {
//     res.send('Welcome to the Product API')

// })



// app.use('/product', (req, res)=>{

//     if(req.method === 'GET'){
//         res.send(products)
//     }

//     if(req.method === 'POST'){
//         res.send('Product Added !')
//     } 

//     if(req.method === 'DELETE'){
//         res.send('This is DELETE request')
//     } 

//     if(req.method === 'PUT'){
//         res.send('This is PUT request')
//     }
// })

const password = 123

app.use('/', 
    (req, res, next) => {

        if(password === 123){
            next()

        }else{
            res.status(401).send({
                message: "Unauthorized access"
            })
        }


    },
    
    (req, res) => {

         console.log("Second Request");

        res.send('This is second request !')
    }
)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
