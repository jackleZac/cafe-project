const mongoose = require('mongoose');
const express = require('express');
const Menu = require('./model/menuSchema');
require('dotenv').config();
const app = express();
const cors = require('cors');


// Middleware
app.use(express.json());
app.use(cors());

// Port Configuration
const port = process.env.PORT;

// Connect to MongoDB
mongoose.connect(process.env.DB, { dbName: 'cafe' })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas')
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB Atlas', err)
        process.exit(1)
    })


// Define Routes
app.get('/api/get-menu', async (req, res) => {
    try {
        const items = await Menu.find({});
        res.status(200).send(items);
        console.log(items);
    } catch (error) {
        console.log({ message: error });
        res.status(500).send({ message: 'Internal Server Error' });
    }
})

app.get('/api/get-menu/:category', async (req, res) => {
    try {
        const filteredMenu = req.params.category;
        const items = await Menu.find({ category: filteredMenu}).exec();
        res.status(200).send(items)
        console.log(items)
    } catch (error) {
        console.log({ message: error });
        res.status(500).send({ message: 'Internal Server Error' });
    }
})

// Start Express Server
app.listen(port, () => {
    console.log(`Server listens on PORT ${port}`)
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    console.log('MongoDB connection closed through app termination')
    process.exit(0)
});