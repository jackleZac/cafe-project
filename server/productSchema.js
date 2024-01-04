const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    id: String,
    imageKey: String,
    name: String,
    description: String,
    category: String,
    price: Number
});

const Product = mongoose.model('Kitten', productSchema);
module.exports = Product;