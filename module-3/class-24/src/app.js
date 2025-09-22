const express = require('express');
const { connectDB } = require('./config/database');
const cookieParser = require('cookie-parser');
const { authRouter } = require('./router/auth');
const { userAuth } = require('./middleware/user');
const { userRouter } = require('./router/user');

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/auth', authRouter)  



connectDB().then(()=>{
console.log("Database connected !");

app.listen(3000, ()=>{
    console.log('Server is running on port 3000 !');
    
})
}).catch((err)=>{
    console.log("Database is not connected !", err);
    
})
