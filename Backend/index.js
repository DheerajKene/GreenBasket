const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8100;
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
const cartRouter = require("./routes/cart.route");
const connection = require("./config/db");

const App = express();
App.use(cors());
App.use(express.json());
App.use('/user', userRouter);
App.use('/product', productRouter);
App.use('/cart', cartRouter);

App.get('/', (req, res)=>{
    res.send('welcomme to the home page...')
});

App.listen(PORT, async ()=>{
    try {
        await connection
        console.log(`server is running on port:${PORT} and mongodb is connected successfully...`)
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
});