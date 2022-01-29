const express = require('express')
const session = require('express-session')
const dotenv = require("dotenv")
const path = require('path')
const connectDB = require('./config/db');


dotenv.config({path: './config/keys.env'});
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/products', require('./routes/index'));

const Port = process.env.PORT || 4000;

app.listen(Port, () => console.log(`Server in running on port ${Port}`));


