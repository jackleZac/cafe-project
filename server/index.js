const mongoose = require('mongoose');
const express = require('express');
const Product = require('./productSchema');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json());
// Port Configuration
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB)
    .then(() => {
        console.log('Connected to Atlas!')
        app.listen(port)
        console.log(`Server listens on PORT ${port}`)})
    .catch((err) => console.log(err))
