const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    }
})

const Menu = mongoose.model('User', userSchema);
module.exports = User;