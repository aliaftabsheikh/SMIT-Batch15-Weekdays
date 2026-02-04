const express = require('express');
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

const { productRouter } = require('./routes/products');
const { authRouter } = require('./routes/auth');
const { AuthMiddleware } = require('./middleware/auth');
const { fileRouter } = require('./routes/file');


app.use('/products', AuthMiddleware,  productRouter);
app.use('/auth', authRouter);
app.use('/file', fileRouter)

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    console.log('Database connected successfully');


    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })

}).catch((err) => {
    console.log('Database connection failed:', err);
});
