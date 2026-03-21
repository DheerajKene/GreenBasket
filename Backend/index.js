const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8100;
const userRouter = require("./routes/user.route");

const App = express();
App.use('/user', userRouter);
App.use(express.json());

App.get('/', (req, res)=>{
    res.send('welcomme to the home page...')
});

App.listen(PORT, ()=>{
    console.log(`Server is running on the port...${PORT}`)
})